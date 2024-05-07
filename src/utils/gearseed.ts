import brandTraits from "../data/json/BrandTraitsParam.json";
import {abilityMap} from "../data/abilities.ts";
import {GearType} from "../types.ts";

import MurmurHash3 from "murmurhash3js";

export const internalAbilityOrder = [
  "MainInk_Save",
  "SubInk_Save",
  "InkRecovery_Up",
  "HumanMove_Up",
  "SquidMove_Up",
  "SpecialIncrease_Up",
  "RespawnSpecialGauge_Save",
  "SpecialSpec_Up",
  "RespawnTime_Save",
  "JumpTime_Save",
  "SubSpec_Up",
  "OpInkEffect_Reduction",
  "SubEffect_Reduction",
  "Action_Up",
]

export const advanceSeed = (x32: number) => {
  x32 ^= x32 << 13;
  x32 ^= x32 >>> 17;  // Use the unsigned right shift
  x32 ^= x32 << 5;
  return x32 >>> 0;
}

const maxBrandNum = (brand: string, drink?: number) => {
  // Neutral brands have a total roll of 28, non-neutral brands 35
  // The total amount is based on how likely each ability is to appear.
  // Favored abilities are worth 10, while unfavored are worth 1, with the remaining abilties being worth 2.
  let totalWeight;
  if (["B97", "B98", "B99", "None"].includes(brand)) {
    totalWeight = 28
  }else{
    totalWeight = 35
  }
  // If a drink is passed, the weight of this ability is removed.
  if (drink != null) {
    totalWeight -= getAbilityWeight(brand, drink)
    console.log(totalWeight)
  }
  return totalWeight;
}

const getAbilityWeight = (brand: string, abilityId: number) => {
  const [uncommon, common, favored] = brandTraits.SkillEasilyToGetParam;
  const abilityKey = abilityMap[abilityId]

  let traitData = brandTraits.Traits[brand];
  if (abilityKey == traitData.UnusualGearSkill) {
    return uncommon;
  }
  if (abilityKey == traitData.UsualGearSkill) {
    return favored;
  }
  return common;
}

const getBrandedAbility = (seed: number, brand: string, drinkId?: number) => {
  let abilityRoll = seed % maxBrandNum(brand, drinkId);
  return weightedAbility(abilityRoll, brand, drinkId);
}


const weightedAbility = (abilityRoll: number, brand: string, drinkId?: number) => {
  let ability = -1;
  while (abilityRoll >= 0) {
    ability++;
    if (drinkId !== ability) {
      abilityRoll -= getAbilityWeight(brand, ability)
    }
  }
  return ability
}

export const getNextAbility = (seed: number, brand: string, drink?: number) => {
  let newSeed = advanceSeed(seed)
  let ret = getBrandedAbility(newSeed, brand)
  if (drink != null) {
    if (newSeed % 0x64 <= 0x1D){
      console.log("LUCKY!")
      return [drink, newSeed]
    }
    console.log("Skipped")
    newSeed = advanceSeed(newSeed);
    // Get ability with drink ability weight removed
    ret = getBrandedAbility(newSeed % maxBrandNum(brand, drink), brand, drink)
  }
  return [ret, newSeed];
}

export const getGearInitialSeed = (userId: string, gearId: number, gearType: GearType) => {
  let hashKey = `${userId}_${gearType}_${gearId}`
  if (gearType === GearType.Clothes && gearId === 26000){
    // Splatfest tee, idk the reason but the hash key is different
    hashKey += "_JUEA-00015"
  }
  const initialSeed = MurmurHash3.x86.hash32(hashKey) >>> 0
  console.log(`Initial seed: ${initialSeed.toString(16)}`)
  return initialSeed
}