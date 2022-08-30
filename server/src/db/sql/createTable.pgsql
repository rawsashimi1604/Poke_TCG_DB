CREATE TABLE legality (
  legality_id BIGSERIAL PRIMARY KEY,
  unlimited BOOLEAN,
  standard BOOLEAN,
  expanded BOOLEAN
);

CREATE TABLE supertype (
  supertype_id INT PRIMARY KEY,
  supertype VARCHAR(50) NOT NULL
);
INSERT INTO supertype (supertype_id, supertype)
VALUES 
  (1, 'Energy'),
  (2, 'Pokémon'),
  (3, 'Trainer');

CREATE TABLE rarity (
  rarity_id INT PRIMARY KEY,
  rarity VARCHAR(50) NOT NULL
);


CREATE TABLE card_set (
  set_id VARCHAR(100) PRIMARY KEY,
  set_name VARCHAR(150) NOT NULL,
  series VARCHAR(150) NOT NULL,
  printed_total INT NOT NULL,
  total INT NOT NULL,
  ptcgo_code VARCHAR(50) NOT NULL,
  release_date DATE NOT NULL,
  updated_at DATE NOT NULL,
  symbol_img VARCHAR(200) NOT NULL,
  logo_img VARCHAR(200) NOT NULL,
  legality_id BIGINT NOT NULL,
  CONSTRAINT fk_legality
    FOREIGN KEY(legality_id)
      REFERENCES legality(legality_id)
);


CREATE TABLE card (
  card_id VARCHAR(50) PRIMARY KEY,
  card_name VARCHAR(100) NOT NULL,
  number VARCHAR(50) NOT NULL,
  artist VARCHAR(100),
  small_img VARCHAR(200) NOT NULL,
  large_img VARCHAR(200) NOT NULL,
  supertype_id INT NOT NULL,
  set_id VARCHAR(100) NOT NULL,
  rarity_id INT,
  CONSTRAINT fk_supertype
    FOREIGN KEY(supertype_id)
      REFERENCES supertype(supertype_id),
  CONSTRAINT fk_set
    FOREIGN KEY(set_id)
      REFERENCES card_set(set_id),  
  CONSTRAINT fk_rarity
    FOREIGN KEY(rarity_id)
      REFERENCES rarity(rarity_id)  
);


CREATE TABLE pokedex_card (
  card_id VARCHAR(50) REFERENCES card(card_id) NOT NULL,
  pokedex_id INT NOT NULL,
  PRIMARY KEY (card_id, pokedex_id)
);

CREATE TABLE tcg_player (
  tcg_player_id BIGSERIAL PRIMARY KEY,
  url VARCHAR(200) NOT NULL,
  updated_at DATE NOT NULL,
  card_type VARCHAR(200) NOT NULL,
  low_price DECIMAL(12, 2), 
  mid_price DECIMAL(12, 2), 
  high_price DECIMAL(12, 2), 
  market_price DECIMAL(12, 2), 
  card_id VARCHAR(50) NOT NULL,
  CONSTRAINT fk_card
    FOREIGN KEY(card_id)
      REFERENCES card(card_id)
);


-- SELECT * FROM supertype;
-- SELECT * FROM rarity;

-- ALTER TABLE card ALTER COLUMN rarity_id DROP NOT NULL;
-- ALTER TABLE card DROP COLUMN pokedex_id;

-- DELETE FROM card_set;
-- DELETE FROM legality;
-- DELETE FROM supertype;

DELETE FROM pokedex_card;
DELETE FROM tcg_player;
DELETE FROM card; 

-- SELECT set_id FROM card_set WHERE set_id = 'bw3';

-- SELECT * FROM card_set WHERE set_id LIKE '%base%';
SELECT * FROM card WHERE set_id = 'pgo' LIMIT 50;
SELECT * FROM card_set ORDER BY release_date DESC;
SELECT * FROM card LIMIT 100;
SELECT * FROM pokedex_card LIMIT 200;
SELECT * FROM tcg_player;