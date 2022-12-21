import {
  CHARACTERS,
  MAX_LENGTH_UNIQUE_ID,
  FIRST_HYPHEN_INDEX,
  SECOND_HYPHEN_INDEX,
} from "../constants";
import { getRandomInt } from "./index";

export const getUniqueId = (): string => {
  let uniqueId: string = "";

  for (let index = 0; index < MAX_LENGTH_UNIQUE_ID; index += 1) {
    if (index === FIRST_HYPHEN_INDEX || index === SECOND_HYPHEN_INDEX) {
      uniqueId += "-";
      continue;
    }

    const characterArray: number[] | string[] =
      CHARACTERS[getRandomInt(CHARACTERS.length)];

    const randomCharacter: number | string =
      characterArray[getRandomInt(characterArray.length)];

    uniqueId += randomCharacter;
  }

  return uniqueId;
};
