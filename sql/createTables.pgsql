-- Create All Tables needed
-- \connect poke-tcg-db

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

CREATE TABLE rarity (
  rarity_id INT PRIMARY KEY,
  rarity VARCHAR(50) NOT NULL
);

CREATE TABLE type (
  type_id INT PRIMARY KEY,
  type VARCHAR(50) NOT NULL
);


CREATE TABLE card_set (
  set_id VARCHAR(100) PRIMARY KEY,
  set_name VARCHAR(150) NOT NULL,
  series VARCHAR(150) NOT NULL,
  printed_total INT NOT NULL,
  total INT NOT NULL,
  ptcgo_code VARCHAR(50),
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
  hp INT,
  flavor_text VARCHAR(500),
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

CREATE TABLE card_type (
  card_type_id BIGSERIAL PRIMARY KEY,
  type_id INT,
  card_id VARCHAR(50) NOT NULL,
  CONSTRAINT fk_type_id 
    FOREIGN KEY(type_id)
      REFERENCES "type"(type_id),
  CONSTRAINT fk_card_id
    FOREIGN KEY(card_id)
      REFERENCES card(card_id)
);

CREATE TABLE subtype (
  subtype_id BIGSERIAL PRIMARY KEY,
  subtype VARCHAR(100) NOT NULL,
  card_id VARCHAR(50) NOT NULL,
  CONSTRAINT fk_card_id
    FOREIGN KEY(card_id)
      REFERENCES card(card_id)
);
