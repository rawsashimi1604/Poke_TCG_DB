/* 
  Seed Pokemon TCG Card rarities using Pokemon TCG API.
*/
import db from "../dbConfig.js";
import pokemon from "pokemontcgsdk";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function seedRarities() {
  const rarities = await pokemon.rarity.all();
  let count = 1;
  for (const rarity of rarities) {
    const res = await db.query(
      `INSERT INTO rarity (rarity_id, rarity)
      VALUES (
        $1, $2
      ) RETURNING *;`,
      [count, rarity]
    );
    count++;
    console.log(res.rows[0]);
  }

  console.log("Completed seeding rarities!");
}

seedRarities();
