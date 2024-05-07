import {Card, SimpleGrid, Image, IconButton} from "@chakra-ui/react";
import {GearData, getAllGear, getGearClothes, getGearImage} from "../data/gear.ts";
import React from "react";
import {Ability, Brand, Gear, GearType} from "../types.ts";
import {getGearInitialSeed} from "../utils/gearseed.ts";

type GearContainerProps = {
  brandFilter?: Brand[];
  typeFilter?: GearType[];
  abilityFilter?: Ability[];
  onSelect?: (gear: GearData) => void
}

export const GearContainer = ({onSelect, brandFilter, typeFilter, abilityFilter}: GearContainerProps) => {
  let allGear = getAllGear()

  if (brandFilter && brandFilter.length > 0) {
    allGear = allGear.filter((gear: GearData) => brandFilter.includes(gear.brand))
  }
  if (typeFilter && typeFilter.length > 0) {
    allGear = allGear.filter((gear: GearData) => typeFilter.includes(gear.type))
  }
  if (abilityFilter && abilityFilter.length > 0) {
    allGear = allGear.filter((gear: GearData) => abilityFilter.includes(gear.mainAbility))
  }

  console.table(allGear);
  console.table(abilityFilter);
  return (
    <SimpleGrid minChildWidth={"128px"} gap={4}>
      {allGear.map((gear: GearData) => <IconButton
        aria-label={gear.key}
        variant={"outline"}
        w={"128px"}
        h={"128px"}
        icon={<Image src={gear.image} />}
        onClick={()=> onSelect && onSelect(gear)}
      />)}
    </SimpleGrid>
  )
}