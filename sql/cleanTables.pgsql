-- Clean all SQL tables to be able to reseed database...

DELETE FROM card_type;
DELETE FROM "type";
DELETE FROM pokedex_card;
DELETE FROM tcg_player;
DELETE FROM subtype;
DELETE FROM card; 
DELETE FROM supertype;
DELETE FROM card_set;
DELETE FROM legality;
DELETE FROM rarity;