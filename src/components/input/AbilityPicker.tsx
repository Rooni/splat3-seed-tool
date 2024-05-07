import {abilityMap} from "../../data/abilities.ts";
import {SimpleGrid} from "@chakra-ui/react";
import {Ability} from "../../types.ts";
import {AbilityButton} from "../AbilityButton.tsx";

type AbilityPickerProps = {
  selected?: Ability[];
  onSelect?: (ability: Ability) => void
  subOnly?: boolean;
  empty?: boolean;
}
export const AbilityPicker = ({selected, empty = false, subOnly = false, onSelect}: AbilityPickerProps) => {
  let abilities = [...abilityMap];
  if (subOnly) {
    abilities = abilities.slice(0, 13);
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
            active={selected?.includes(index)}
            onClick={() => onSelect && onSelect(index)}
          />
        })}

    </SimpleGrid>
  )
}