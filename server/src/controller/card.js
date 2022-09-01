import {
  CardQuery,
  SetQuery,
  TCGPlayerQuery,
  PokedexCardQuery,
  SubtypeQuery,
  TypeQuery,
} from "../db/queries/index.js";

// async function buildCardJSON(card) {

//   // Query set by set_id
//   const setQuery = await SetQuery.getSetById(card.set_id);
//   const setData = setQuery.rows[0];

//   const res = {}

//   res.card_id = card.card_id;
//   res.card_name = card.card_name;
//   res.number = parseInt(card.number);
//   res.supertype = card.supertype;
//   res.supertype;
//   if (card.artist) res.artist = card.artist;
//   res.hp = card.hp;
//   res.rarity = card.rarity;
//   res.flavor_text = card.flavor_text;
//   res.images = {
//     small_img: card.small_img,
//     large_img: card.large_img,
//   }
//   res.set = setData;

//   res.prices;
//   res.subtypes;
//   res.pokedexNumber;
//   res.types;

//   // Query TCG Player Prices
//   const tcgPlayerPrices = await TCGPlayerQuery.getTCGPlayerPriceById(card.card_id);
//   for (const price of tcgPlayerPrices.rows) {

//   }
//   console.log(res)
//   return res;
// }

function handleIndex(req, res) {
  res.send("Card route");
}

// GET all cards
async function handleAllCards(req, res) {
  if (req.query.quantity) {
    const qty = req.query.quantity;
    const queryRes = await CardQuery.getCardsByQuantity(qty);
    res.send(queryRes.rows);
  } else {
    const queryRes = await CardQuery.getAllCards();
    res.send(queryRes.rows);
  }
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
    res.send(queryRes.rows[0]);
  } catch (err) {
    next(err);
  }
}

// GET all cards by set id
async function handleAllCardsFromSetId(req, res) {
  const setId = req.params.set;
  const queryRes = await CardQuery.getBySet(setId);
  res.send(queryRes.rows);
}

export default {
  handleIndex,
  handleAllCards,
  handleCardCount,
  handleSpecificCardByCardId,
  handleAllCardsFromSetId,
};
