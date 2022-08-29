/* 
  Seed Pokemon TCG Sets using Pokemon TCG API.
*/
import envConfig from "../../envConfig.js";
import db from "../../dbConfig.js";
import pokemon from "pokemontcgsdk";
import sleep from "../../lib/sleep.js";

async function seedTCGSets() {
  // Data from Pokemon TCG API...
  const data = await pokemon.set.all();

  for (const tcgSet of data) {
    try {
      // Insert legalities of each set first...
      const legalityData = await db.query(
        `INSERT INTO legality (
          unlimited, standard, expanded
        ) 
        VALUES ($1, $2, $3)
        RETURNING *
        ;`,
        [
          tcgSet.legalities.hasOwnProperty("unlimited"),
          tcgSet.legalities.hasOwnProperty("standard"),
          tcgSet.legalities.hasOwnProperty("expanded"),
        ]
      );

      console.log(legalityData.rows[0]);

      // Insert into card_set, use legality FK...
      const cardSetData = await db.query(
        `INSERT INTO card_set (
          set_id, set_name, series, printed_total, total,ptcgo_code,release_date,updated_at,symbol_img,logo_img,legality_id
        ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) RETURNING *;
        `,
        [
          tcgSet.id,
          tcgSet.name,
          tcgSet.series,
          tcgSet.printedTotal,
          tcgSet.total,
          tcgSet.ptcgoCode,
          tcgSet.releaseDate,
          tcgSet.updatedAt,
          tcgSet.images.symbol,
          tcgSet.images.logo,
          legalityData.rows[0].legality_id,
        ]
      );

      console.log(cardSetData.rows[0]);

      console.log(
        `Sucessfully added ${tcgSet.id}: ${tcgSet.name} to database!`
      );
    } catch (err) {
      console.log(err);
      console.log("something went wrong...");
    }

    await sleep(500);
  }
  console.log("Completed seeding sets!");
}

seedTCGSets();
