import {IconButton} from "@chakra-ui/react";
import {Ability} from "../types.ts";
import {abilityObjects} from "../data/abilities.ts";
import {AbilityImage} from "./AbilityImage.tsx";

type Props = {
  abilityId: Ability;
  onClick?: (abilityId: Ability) => void;
  active?: boolean;
}
export const AbilityButton = ({ abilityId, onClick, active=false } : Props) => {
  let ability = abilityObjects[abilityId];
  return (
    <IconButton
      aria-label={ability.name}
      isRound={true}
      size="64px"
      colorScheme={active ? "purple": undefined}
      icon={<AbilityImage ability={abilityId}/>}
      onClick={() => onClick && onClick(abilityId)}
    />
  )
}