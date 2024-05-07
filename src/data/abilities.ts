import brandTraits from "./json/BrandTraitsParam.json";
import brandDetails from "./json/BrandDetails.json";
import {brandIdMap, brandImages} from "./brand.ts";

export const abilityImages = import.meta.glob('@assets/skill/*.png', { eager: true, as: 'url' })

export const abilityMap = [
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
  "StartAllUp",
  "EndAllUp",
  "ComeBack",
  "SquidMoveSpatter_Reduction",
  "Exorcist",
  "ObjectEffect_Up",
  "SomersaultLanding",
  "Unknown",
]

export const abilityNameMap = [
  "Ink Saver (Main)",
  "Ink Saver (Sub)",
  "Ink Recovery Up",
  "Run Speed Up",
  "Swim Speed Up",
  "Special Charge Up",
  "Special Saver",
  "Special Power Up",
  "Quick Respawn",
  "Quick Super Jump",
  "Sub Power Up",
  "Ink Resistance Up",
  "Sub Resistance Up",
  "Intensify Action",
]

export const abilityObjects = [...abilityMap.map((ability, index: number) => {
  return {
    index,
    name: ability,
    image: abilityImages[`/src/assets/skill/${ability}.png`]
  }
})]

export const getAbilityData = (ability: string | number) => {
  let abilityKey, abilityId;
  if (typeof ability === "string"){
    abilityKey = ability;
    abilityId = abilityMap.indexOf(ability)
  }else if (typeof ability === "number"){
    abilityKey = abilityMap[ability]
    abilityId = ability
  }else{
    return {}
  }
  return {
    id: abilityKey,
    "name": abilityNameMap[abilityId],
    image: abilityImages[`/src/assets/skill/${abilityKey}.png`],
  }

}