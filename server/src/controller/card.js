import {
  CardQuery,
  SetQuery,
  TCGPlayerQuery,
  PokedexCardQuery,
  SubtypeQuery,
  TypeQuery,
} from "../db/queries/index.js";

async function buildCardJSON(card) {
  // Query subtype by card_id
  const subtypeQuery = await SubtypeQuery.getSubtypesById(card.data.card_id);
  const subtypeData = subtypeQuery.rows;

  // Query type by card_id
  const typeQuery = await TypeQuery.getCardTypesById(card.data.card_id);
  const typeData = typeQuery.rows;

  // Query pokedexCard by card_id
  const pokedexQuery = await PokedexCardQuery.getPokedexByCardId(
    card.data.card_id
  );
  const pokedexData = pokedexQuery.rows;

  // Query set by set_id
  const setQuery = await SetQuery.getSetById(card.data.set_id);
  const setData = setQuery.rows[0];

  // Query TCG_player prices...
  const tcgPlayerQuery = await TCGPlayerQuery.getTCGPlayerPriceById(
    card.data.card_id
  );
  const tcgPlayerData = tcgPlayerQuery.rows;

  const res = {
    ...card.data,
    number: parseInt(card.data.number),
    subtypes: subtypeData.map((subtype) => subtype.subtype),
    types: typeData.map((type) => type.type),
    pokedexNumbers: pokedexData.map((pokedex) => pokedex.pokedex_id),
    set: setData.data,
    prices: tcgPlayerData.map((tcgData) => {
      return {
        ...tcgData,
        low_price: parseFloat(tcgData.low_price),
        mid_price: parseFloat(tcgData.mid_price),
        high_price: parseFloat(tcgData.high_price),
        market_price: parseFloat(tcgData.market_price),
      };
    }),
  };

  return res;
}

function handleIndex(req, res) {
  res.send("Card route");
}

// GET all cards
async function handleAllCards(req, res) {
  let queryRes;
  if (req.query.quantity) {
    const qty = req.query.quantity;
    queryRes = await CardQuery.getCardsByQuantity(qty);
  } else {
    queryRes = await CardQuery.getAllCards();
  }
  res.send(
    await Promise.all(
      queryRes.rows.map(async (card) => await buildCardJSON(card))
    )
  );
}

// GET card count in database
async function handleCardCount(req, res) {
  const queryRes = await CardQuery.getCardQuantity();
  res.send(queryRes.rows[0]);
}

// GET card by card id
async function handleSpecificCardByCardId(req, res) {
  try {
    const cardId = req.params.cardId;
    const queryRes = await CardQuery.getById(cardId);
    res.send(await buildCardJSON(queryRes.rows[0]));
  } catch (err) {
    console.log(err);
  }
}

// GET all cards by set id
async function handleAllCardsFromSetId(req, res) {
  const setId = req.params.set;
  const queryRes = await CardQuery.getBySet(setId);
  res.send(
    await Promise.all(
      queryRes.rows.map(async (card) => await buildCardJSON(card))
    )
  );
}

// GET all cards by type
async function handleAllCardsByType(req, res) {
  const type = req.params.type;
  const qty = req.query.quantity;

  // Format type to capital case
  const formattedType = type[0].toUpperCase() + type.slice(1).toLowerCase();

  const queryRes = await CardQuery.getAllCardsByType(formattedType, qty);
  res.send(
    await Promise.all(
      queryRes.rows.map(async (card) => await buildCardJSON(card))
    )
  );
}

export default {
  handleIndex,
  handleAllCards,
  handleCardCount,
  handleSpecificCardByCardId,
  handleAllCardsFromSetId,
  handleAllCardsByType,
};
