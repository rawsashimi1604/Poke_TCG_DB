import { CardQuery } from "../db/queries/index.js";

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
  const cardId = req.params.cardId;
  const queryRes = await CardQuery.getById(cardId);
  res.send(queryRes.rows[0]);
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
