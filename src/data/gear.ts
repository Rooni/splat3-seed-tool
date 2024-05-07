export const gearImages = import.meta.glob('@assets/gear/*.png', { eager: true, as: 'url' })
import gearInfoHead from "./json/GearInfoHead.json";
import gearInfoClothes from "./json/GearInfoClothes.json";
import gearInfoShoes from "./json/GearInfoShoes.json";

type GearType = "head" | "clothes" | "shoes"

type Gear = {
  id: string;
  type: GearType;
  brand: string;
  image: string;
}

export const getAllGear = (): Gear[] => {
  return [...getGearHead() ,...getGearClothes(), ...getGearShoes()]
}

export const getGearHead = (): Gear[]  => {
  return gearInfoHead.map((gearJson) => {
    return {
      id: gearJson.__RowId,
      type: "head",
      brand: gearJson.Brand,
      image: getGearImage(gearJson.__RowId)
    }
  })
}
export const getGearClothes = (): Gear[]  => {
  return gearInfoClothes.map((gearJson) => {
    return {
      id: gearJson.__RowId,
      type: "clothes",
      brand: gearJson.Brand,
      image: getGearImage(gearJson.__RowId)
    }
  })
}

export const getGearShoes = (): Gear[]  => {
  return gearInfoShoes.map((gearJson) => {
    return {
      id: gearJson.__RowId,
      type: "shoes",
      brand: gearJson.Brand,
      image: getGearImage(gearJson.__RowId)
    }
  })
}



export const getGearImage = (gear) => {
  return gearImages[`/src/assets/gear/${gear}.png`];
}