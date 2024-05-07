import {abilityMap, abilityObjects} from "../data/abilities.ts";
import {IconButton, Image, SimpleGrid} from "@chakra-ui/react";
import {Ability} from "../types.ts";
import {AbilityButton} from "./AbilityButton.tsx";

type Props = {
  subOnly?: boolean;
  empty?: boolean;
  selected?: Ability;
  onClick?: (ability: Ability) => void
}
export const AbilityPicker = ({selected=null, empty=false, subOnly=false, onClick}: Props) => {
  let abilities = [...abilityMap];
  if (subOnly) {
    abilities = abilities.slice(0, 14);
  }
  if (empty) {
    abilities.push("Unknown")
  }
  return (
    <SimpleGrid minChildWidth={"64px"} spacing={2}>
      {
        abilities.map((_, index: number) => {

        return <AbilityButton
          abilityId={index}
          onClick={() => onClick && onClick(index)}
        />
      })}

    </SimpleGrid>
  )
}