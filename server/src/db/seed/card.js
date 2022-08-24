/* 
  Seed Pokemon TCG Cards by Sets using Pokemon TCG API.
*/
import envConfig from "../../envConfig.js";
import db from "../dbConfig.js";
import pokemon from "pokemontcgsdk";
import sleep from "../../lib/sleep.js";

async function seedTCGCardsBySet() {
  // Use API KEY from Pokemon TCG API Developer Portal...
  pokemon.configure({ apiKey: envConfig.POKE_API_TCG_KEY });

  // Get all sets from DB..., 143 total sets...
  const sets = await db.query("SELECT set_id FROM card_set");

  // Get all pokemon TCG cards from specific set...
  for (const set of sets.rows) {
    sleep(10000);
    let errors = 0;
    const cards = await pokemon.card.all({ q: `set.id:${set.set_id}` });
    // false => debug, true => seed normally...
    if (true || set.set_id === "") {
      for (const card of cards) {
        // console.log(card);
        try {
          sleep(1000);
          // Get supertype ID
          const supertypeID = await db.query(
            "SELECT supertype_id FROM supertype WHERE supertype = $1",
            [card.supertype]
          );

          // Get rarity ID
          const rarityID = await db.query(
            "SELECT rarity_id FROM rarity WHERE rarity = $1",
            [card.rarity]
          );

          // Insert into card table...
          const res = await db.query(
            `INSERT INTO card (
                card_id, set_id, supertype_id, rarity_id, card_name, number, artist, small_img, large_img
              ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9
              ) RETURNING *;
              `,
            [
              card.id,
              set.set_id,
              supertypeID.rows[0].supertype_id,
              rarityID.rows[0]?.rarity_id || null,
              card.name,
              card.number,
              card.artist,
              card.images.small,
              card.images.large,
            ]
          );

          // console.log(res.rows[0]);

          // Insert into pokedex card table for each national pokedex number...
          if (card.nationalPokedexNumbers) {
            for (const pokedexId of card.nationalPokedexNumbers) {
              const pokedexCardRes = await db.query(
                `INSERT INTO pokedex_card (
                    card_id, pokedex_id
                  ) VALUES (
                    $1, $2
                  ) RETURNING *;`,
                [res.rows[0].card_id, pokedexId]
              );
              // console.log(pokedexCardRes.rows[0]);
            }
          }

          // Insert into tcg_player table price check
          if (card.tcgplayer?.prices) {
            for (const rarity of Object.keys(card.tcgplayer.prices)) {
              const tcgPriceObj = card.tcgplayer.prices[rarity];
              const tcgPlayerRes = await db.query(
                `INSERT INTO tcg_player (
                    url, updated_at, card_type, low_price, mid_price, high_price, market_price, card_id
                  ) VALUES (
                    $1, $2, $3, $4, $5, $6, $7, $8
                  ) RETURNING *;`,
                [
                  card.tcgplayer.url,
                  card.tcgplayer.updatedAt,
                  rarity,
                  tcgPriceObj.low,
                  tcgPriceObj.mid,
                  tcgPriceObj.high,
                  tcgPriceObj.market,
                  res.rows[0].card_id,
                ]
              );

              // console.log(tcgPlayerRes.rows[0]);
            }
          }
        } catch (err) {
          console.log(err);
          console.log(
            `Card ID: ${card.id} Something went wrong when adding this card...`
          );
          errors++;
        }

        sleep(500);
      }
    }

    console.log(`Completed seeding set: ${set.set_id}, errors: ${errors}`);
  }
  console.log("Completed seeding cards!");
}

seedTCGCardsBySet();
