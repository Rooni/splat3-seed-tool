import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Tooltip
} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useLocalStorage} from "@uidotdev/usehooks";

import * as types from "../types.ts";
import {abilityNameMap, abilityObjects} from "../data/abilities.ts";
import {BrandPicker} from "../components/BrandPicker.tsx";
import {GearDetail} from "../components/GearDetail.tsx";
import {AbilityPicker} from "../components/input/AbilityPicker.tsx";
import {getNextAbility, internalAbilityOrder} from "../utils/gearseed.ts";
import {useState} from "react";
import {getBrandData} from "../data/brand.ts";


export const GearRefine = () => {
  const {gearId} = useParams();

  const [gearData, updateGearData] = useLocalStorage<types.Gear[]>("gear", []);

  const gear = gearData.find((gear: types.Gear) => gear.uuid == gearId)

  const [abilityState, setAbilityState ] = useState<number[]>([])

  const brandData = getBrandData(gear.brand)

  const UpdateGear = (data: types.Gear) => {
    updateGearData((prevState: types.Gear[]) => {
      let newState = prevState.map((gear: types.Gear) => {
        if (gear.uuid == data.uuid) {
          return data;
        }else{
          return gear;
        }
      })
      return newState;
    })
  }
  const handleBrandClick = (brand: string) => {
    UpdateGear({...gear, brand: brand});
  }
  if (!gear) {
    return "Unknown gear";
  }

  const calculateAbilities = () => {
    let abilities = []
    let seed;
    for (let drink=0; drink<internalAbilityOrder.length; drink++){
      seed = gear.randomContext;
      for (let i = 0; i < 15; i++) {
        let [newAbility, newSeed] = getNextAbility(seed, gear.brand, drink);

        console.log(newSeed.toString(16))
        abilities.push(newAbility)
        seed = newSeed;
      }
    }
    console.log(abilities)
    setAbilityState(abilities)
  }

  return (
    <>
      <Heading my={4}>Refine gear</Heading>
      <Heading my={2} size={"md"}>Gear details</Heading>
      <GearDetail data={gear}/>


      <Card my={2}>
        <CardHeader>
          <Heading my={2} size={"md"}>Predict</Heading>
        </CardHeader>
        <CardBody>
          <Button onClick={calculateAbilities}>Calculate</Button>
          <SimpleGrid minChildWidth='64px' gap={2}>
            {abilityState.map((abilityId) => <Tooltip label={abilityId}><IconButton h={16} isRound={true} aria-label={"ability"} icon={<Image w={16} src={abilityObjects[abilityId].image}/>}>{abilityId}</IconButton></Tooltip>)}
          </SimpleGrid>
        </CardBody>
      </Card>
      <Heading my={2} size={"md"}>Ability history</Heading>
    </>
  )
}