import {Button, Card, CardBody, Checkbox, Heading, HStack, Stack, VStack} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {AbilityPicker} from "../components/AbilityPicker.tsx";
import {Ability} from "../types.ts";
import {useState} from "react";
import {AbilityButton} from "../components/AbilityButton.tsx";
import {HelpTooltip} from "../components/HelpTooltip.tsx";

export const GearPlanner = () => {
  const {gearId} = useParams();

  const [preferredAbilities, setPreferredAbilities] = useState<Ability[]>([Ability.Empty,Ability.Empty,Ability.Empty])

  const setAbilityIndex = (index: number, ability: Ability) => {
    setPreferredAbilities((prev: Ability[]) => {
      let newState = [...prev]
      newState[index] = ability;
      return newState
    })
  }
  const handleAbilityClick = (ability: Ability) => {
    setPreferredAbilities((prev: Ability[]) => {
      let firstEmptyIndex = prev.findIndex((value: Ability) => value === Ability.Empty)
      let newState = [...prev]
      if (firstEmptyIndex !== -1) {
        newState[firstEmptyIndex] = ability;
      }
      return newState
    })
  }
  return (
    <>
      <Heading size={"md"}>Planner</Heading>
      <Card>
        <CardBody>
          <Stack>
            <Heading size={"md"}>Preferred abilities</Heading>
            <HStack>
              {preferredAbilities.map((abilityId: Ability, index: number) => {
                return <AbilityButton abilityId={abilityId} onClick={() => setAbilityIndex(index, Ability.Empty)}/>
              })}
            </HStack>
            <AbilityPicker subOnly onClick={handleAbilityClick}/>
            <Checkbox defaultChecked>Exact order</Checkbox>
            <Button>Find seed</Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}