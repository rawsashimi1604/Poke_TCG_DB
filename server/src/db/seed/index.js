/*
  Seed Poke_TCG_DB using various seeding scripts...
*/

import seedCard from "./card.js";
import seedRarity from "./rarity.js";
import seedSet from "./set.js";
import seedSupertype from "./supertype.js";
import seedType from "./type.js";

import sleep from "../../lib/sleep.js";

seedType();
sleep(2000);

seedRarity();
sleep(2000);

seedSupertype();
sleep(2000);

seedSet();
sleep(2000);

seedCard();
sleep(2000);
