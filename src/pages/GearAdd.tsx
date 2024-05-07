import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader, Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading, HStack, Image,
  Input, SimpleGrid, Text,
  VStack
} from "@chakra-ui/react";
import {GearData, getGearDataFromKey} from "../data/gear.ts";
import {useSearchParams} from "react-router-dom";
import {Field, Formik} from "formik";
import {BrandImage} from "../components/layout/BrandImage.tsx";
import {AbilityImage} from "../components/AbilityImage.tsx";
import {AbilityPopover} from "../components/input/AbilityPopover.tsx";
import {getGearInitialSeed, getNextAbility} from "../utils/gearseed.ts";
import {Ability, Gear} from "../types.ts";
import {abilityMap, abilityNameMap} from "../data/abilities.ts";


const GearForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        favorite: false,
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="text"
                variant="filled"
                size={"sm"}
              />
            </FormControl>
            <Field
              as={Checkbox}
              id="favorite"
              name="favorite"
              colorScheme="purple"
            >
              Favorite?
            </Field>
            <Button type="submit" colorScheme="purple">
              Add
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  )
}

const PredictionRow = ({gear, drink}: {gear: GearData, drink?: Ability}) => {
  let prediction = [];
  let currentSeed = getGearInitialSeed("u-aggaiwieeknzhzrnrnmm", gear.id, gear.type);
  let nextAbility;

  for (let i=0; i<15; i++){
    [nextAbility, currentSeed] = getNextAbility(currentSeed, gear.brand, drink)
    prediction.push(nextAbility)
  }
  return (
    <SimpleGrid minChildWidth={"64px"}>
      <AbilityImage ability={drink || 21}/>
      {prediction.map((ability) => <AbilityImage ability={ability}/>)}
    </SimpleGrid>
  )
}

export const GearAdd = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gear = getGearDataFromKey(searchParams.get("gearKey")||"");

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size={"md"}>Register new gear</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} gap={2}>
            <GearForm/>
            <Card direction={"row"}>
              <Box p={2} m={4} borderRadius='sm' overflow='hidden' bg={"blackAlpha.300"}>
                <Image
                  src={gear.image}
                  w={"128px"}
                  h={"128px"}
                  m={2}
                />
              </Box>
              <HStack>
                  <BrandImage brand={gear.brand}  />
                  <AbilityPopover ability={2} onSelect={(ability)=> console.log(ability)}/>
              </HStack>
            </Card>
          </SimpleGrid>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading size={"md"}>Prediction</Heading>
        </CardHeader>
        <CardBody>
          <PredictionRow gear={gear}/>
          {
            abilityNameMap.map((name, index) => <PredictionRow gear={gear} drink={index}/>)
          }

        </CardBody>
      </Card>
    </>
  )
}