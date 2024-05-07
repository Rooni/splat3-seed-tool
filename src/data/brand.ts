import {Brand} from "../types.ts";

export const brandImages = import.meta.glob('@assets/brand/*.png', { eager: true, as: 'url' })

import brandDetails from "./json/BrandDetails.json";
import brandTraits from "./json/BrandTraitsParam.json";

export const brandIdMap = [
  "B00",
  "B01",
  "B02",
  "B03",
  "B04",
  "B05",
  "B06",
  "B07",
  "B08",
  "B09",
  "B10",
  "B11",
  "B15",
  "B16",
  "B17",
  "B18",
  "B19",
  "B20",
  "B97",
  "B98",
  "B99",
  "None",
]

export const getAllBrands = () => {
  return brandIdMap.map(getBrandData);
}

export const getBrandData = (brand: string | number) => {
  let brandKey: string;
  if (typeof brand === "string"){
    brandKey = brand;
  }else if (typeof brand === "number"){
    brandKey = brandIdMap[brand]
  }else{
    brandKey = "B00";
  }
  let { UnusualGearSkill: uncommonAbility, UsualGearSkill: commonAbility } = brandTraits.Traits[brandKey];

  return {
    id: Brand[brandKey],
    key: brandKey,
    "name": brandDetails[brandKey].name,
    image: brandImages[`/src/assets/brand/${brandKey}.png`],
    commonAbility: commonAbility,
    uncommonAbility: uncommonAbility,
  }

}

export const getBrandImage = (brandId: number) => {
  return getBrandData(brandId).image
}