import {Box, Image} from "@chakra-ui/react";
import {Ability} from "../types.ts";
import {abilityObjects} from "../data/abilities.ts";

type Props = {
  ability: Ability;
  drink?: Ability;
}
export const AbilityImage = ({ ability, drink=21} : Props) => {
  let abilityObject = abilityObjects[ability];
  let size = "16";
  let iconSize = "8";
  return (
    <Box pos={"relative"} boxSize={size}>
      <Image pos={"absolute"} boxSize={size} src={abilityObject.image}/>
      { drink !== 21 && <Image pos={"absolute"} boxSize={iconSize} src={abilityObject.image} right={0} bottom={0}/>}
    </Box>
  )
}