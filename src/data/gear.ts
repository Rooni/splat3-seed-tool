import {Gear, GearType} from "../types.ts";

import gearInfoHead from "./json/GearInfoHead.json";
import gearInfoClothes from "./json/GearInfoClothes.json";
import gearInfoShoes from "./json/GearInfoShoes.json";
import {abilityMap} from "./abilities.ts";

export const gearImages = import.meta.glob('@assets/gear/*.png', { eager: true, as: 'url' })

export type GearData = Gear & {
  key: string;
  image: string;
}

export const getAllGear = (): GearData[] => {
  return [...getGearHead() ,...getGearClothes(), ...getGearShoes()]
}

export const getGearHead = (): GearData[]  => {
  return gearInfoHead.map((gearJson) => {
    return {
      id: gearJson.Id,
      key: gearJson.__RowId,
      mainAbility: abilityMap.indexOf(gearJson.Skill),
      type: "Head",
      brand: gearJson.Brand,
      image: getGearImage(gearJson.__RowId)
    }
  })
}
export const getGearClothes = (): GearData[]  => {
  return gearInfoClothes.map((gearJson) => {
    return {
      id: gearJson.Id,
      key: gearJson.__RowId,
      type: "Clothes",
      mainAbility: abilityMap.indexOf(gearJson.Skill),
      brand: gearJson.Brand,
      image: getGearImage(gearJson.__RowId)
    }
  })
}

export const getGearShoes = (): GearData[]  => {
  return gearInfoShoes.map((gearJson) => {
    return {
      id: gearJson.Id,
      key: gearJson.__RowId,
      type: "Shoes",
      mainAbility: abilityMap.indexOf(gearJson.Skill),
      brand: gearJson.Brand,
      image: getGearImage(gearJson.__RowId)
    }
  })
}

export const getGearDataFromKey = (gearKey: string): GearData => {
  const jsonMap = new Map([
    [gearInfoHead, GearType.Head],
    [gearInfoClothes, GearType.Clothes],
    [gearInfoShoes, GearType.Shoes],
  ])
  let gear, gearType;
  for (const [json, type] of jsonMap) {
    gear = json.find((g) => g.__RowId == gearKey)
    gearType = type
    if (gear !== undefined)
      break;
  }
  if (gear === undefined){
    return {}
  }
  return {
    id: gear.Id,
    key: gear.__RowId,
    type: gearType,
    mainAbility: abilityMap.indexOf(gear.Skill),
    brand: gear.Brand,
    image: getGearImage(gear.__RowId)
  }
}

export const getGearImage = (gear) => {
  return gearImages[`/src/assets/gear/${gear}.png`];
}