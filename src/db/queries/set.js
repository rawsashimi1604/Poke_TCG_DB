import db from "../../dbConfig.js";

function getAllSets() {
  try {
    const query = `
      SELECT json_build_object(
        'set_id', cs.set_id,
        'set_name', cs.set_name,
        'series', cs.series,
        'printed_total', cs.printed_total,
        'total', cs.printed_total,
        'ptcgo_code', cs.ptcgo_code,
        'release_date', cs.release_date,
        'updated_at', cs.updated_at,
        'legality', json_build_object(
          'unlimited', l.unlimited,
          'standard', l.standard,
          'expanded', l.expanded
        ),
        'images', json_build_object(
          'symbol_img', cs.symbol_img,
          'logo_img', cs.logo_img
        )
      )
      AS data
      FROM card_set cs
      INNER JOIN legality l ON cs.legality_id = l.legality_id;
    `;
    return db.query(query);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function getSetQuantity() {
  try {
    const query = "SELECT COUNT(*) FROM card_set";
    return db.query(query);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function getSetById(id) {
  try {
    const query = `
      SELECT json_build_object(
        'set_id', cs.set_id,
        'set_name', cs.set_name,
        'series', cs.series,
        'printed_total', cs.printed_total,
        'total', cs.printed_total,
        'ptcgo_code', cs.ptcgo_code,
        'release_date', cs.release_date,
        'updated_at', cs.updated_at,
        'legality', json_build_object(
          'unlimited', l.unlimited,
          'standard', l.standard,
          'expanded', l.expanded
        ),
        'images', json_build_object(
          'symbol_img', cs.symbol_img,
          'logo_img', cs.logo_img
        )
      )
      AS data
      FROM card_set cs
      INNER JOIN legality l ON cs.legality_id = l.legality_id
      WHERE cs.set_id = $1
    `;
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default { getAllSets, getSetQuantity, getSetById };
