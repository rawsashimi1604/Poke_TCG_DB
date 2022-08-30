/* 
  Seed Pokemon TCG Card pokemon types using Pokemon TCG API.
*/
import envConfig from "../../envConfig.js";
import db from "../../dbConfig.js";
import pokemon from "pokemontcgsdk";
import sleep from "../../lib/sleep.js";

async function seedTypes() {
  const types = await pokemon.type.all();
  let count = 1;
  for (const type of types) {
    const res = await db.query(
      `INSERT INTO type (type_id, type)
      VALUES (
        $1, $2
      ) RETURNING *;`,
      [count, type]
    );
    count++;
    console.log(res.rows[0]);
  }
  console.log("Completed seeding types!");
}

seedTypes();
