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
  (2, 'Pokemon'),
  (3, 'Trainer');

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
  number INT NOT NULL,
  artist VARCHAR(100),
  rarity VARCHAR(100),
  pokedex_id INT,
  small_img VARCHAR(200) NOT NULL,
  large_img VARCHAR(200) NOT NULL,
  supertype_id INT NOT NULL,
  set_id VARCHAR(100) NOT NULL,
  CONSTRAINT fk_supertype
    FOREIGN KEY(supertype_id)
      REFERENCES supertype(supertype_id),
  CONSTRAINT fk_set
    FOREIGN KEY(set_id)
      REFERENCES card_set(set_id)  
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