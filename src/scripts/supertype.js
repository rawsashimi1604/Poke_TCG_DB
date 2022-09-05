/* 
  Seed Pokemon TCG Card supertypes using Pokemon TCG API.
*/
import db from "../dbConfig.js";
import pokemon from "pokemontcgsdk";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function seedSupertypes() {
  const supertypes = await pokemon.supertype.all();
  let count = 1;
  for (const supertype of supertypes) {
    const res = await db.query(
      `INSERT INTO supertype (supertype_id, supertype)
      VALUES (
        $1, $2
      ) RETURNING *;`,
      [count, supertype]
    );
    count++;
    console.log(res.rows[0]);
  }

  console.log("Completed seeding supertypes!");
}

seedSupertypes();
