import {Card, SimpleGrid, Image, IconButton} from "@chakra-ui/react";
import {getAllGear, getGearClothes, getGearImage} from "../data/gear.ts";
import React from "react";

export const GearContainer = () => {
  const allGear = getAllGear().filter((gear) => gear.brand == "B15")

  return (
    <SimpleGrid minChildWidth={"128px"} gap={4}>
      {allGear.map((gear) => <IconButton variant={"outline"} w={"128px"} h={"128px"} icon={<Image src={gear.image} />}></IconButton>)}
    </SimpleGrid>
  )
}