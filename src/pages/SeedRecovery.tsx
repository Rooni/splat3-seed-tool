import {
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Code,
  Button,
  VStack,
  Stack,
  FormControl, FormLabel, FormHelperText, Tooltip, HStack, SimpleGrid
} from "@chakra-ui/react";
import {useState} from "react";
import {Ability} from "../types.ts";
import {getNextAbility} from "../utils/gearseed.ts";
import {AbilityImage} from "../components/AbilityImage.tsx";
import {AbilityPicker} from "../components/AbilityPicker.tsx";
import {BrandSelect} from "../components/input/BrandSelect.tsx";


type Prediction = {
  seed?: number;
  ability: Ability;
  drink?: Ability;
}

export const SeedRecovery = () => {
  const brandId = "B16";
  const [ startSeed, setStartSeed ] = useState<number>(0xe615985)
  const [ maxSearch, setMaxSearch ] = useState<number>(20)
  const [ abilityPatterns, setAbilityPatterns ] = useState<Prediction[]>([])

  const [ predictions, setPredictions ] = useState<Prediction[]>([{seed: 123, ability: 1}])

  const [ potentialSeeds, setPotentialSeeds ] = useState<number[]>([])

  const handleSeedUpdate = (event) => {
    const { value } = event.target
    if (/0x[0-9A-Fa-f]./g.test(value)) {
      setStartSeed(parseInt(value.substring(2), 16))
    }else if (/^\d+$/.test(value)){
      setStartSeed(parseInt(value));
    }
  }

  const handlePatternSearch = () => {
    setPotentialSeeds([])
    let currentSeed = startSeed;

    for (let i=0; i<maxSearch; i++) {
      // Search until we find a match on the first pattern item
      let [nextAbility, nextSeed ] = getNextAbility(currentSeed, brandId)
      currentSeed = nextSeed

      let match: Prediction[] = []
      for (const pattern of abilityPatterns) {
        if (nextAbility != pattern.ability) {
          break
        }
        match.push({ability: nextAbility, seed: nextSeed});
        [nextAbility, nextSeed ] = getNextAbility(nextSeed, brandId)
      }
      if (match.length == abilityPatterns.length) {
        let matchedSeed = match.slice(-1)[0].seed||0
        // The whole pattern matches, so we found a potential seed. Add it to the list
        setPotentialSeeds((prev) => [...prev, matchedSeed])
        console.log(`Found potential seed: ${matchedSeed.toString(16)}. Going back to ${currentSeed.toString(16)}`)
      }

    }
  }

  const handleSearch = () => {
    let initialPrediction = {
      seed: startSeed,
      ability: 21
    }
    setPredictions((prev) => [initialPrediction])
    for (let i=0; i<maxSearch; i++) {

      setPredictions((prev) => {
        let previous: Prediction = prev.slice(-1)[0]
        let [newAbility, newSeed ] = getNextAbility(previous.seed, "B11")
        return [...prev, {seed: newSeed, ability: newAbility}]
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <Heading size={"lg"}>Recover seed</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <Text>Base seed <Code>0x{startSeed.toString(16)}</Code> <Code>{startSeed}</Code></Text>
          <Input onChange={handleSeedUpdate} placeholder={"0x0000000"}></Input>
          <FormControl>
            <FormLabel>Brand</FormLabel>
            <BrandSelect/>
            <FormHelperText>The gear brand</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Max search</FormLabel>
            <Input value={maxSearch} onChange={(event) => setMaxSearch(parseInt(event.target.value))}></Input>
            <FormHelperText>How many iterations of seeds to consider</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Ability pattern</FormLabel>
            <SimpleGrid columns={17}>
              { abilityPatterns.length !== 0 ?
                abilityPatterns.map( (ability) => {
                  return <AbilityImage ability={ability.ability} />
                })
                :
                <AbilityImage ability={Ability.Empty} />
              }
            </SimpleGrid>
            <Button size={"sm"} onClick={()=>setAbilityPatterns((prev) => [])}>Clear pattern</Button>
            <AbilityPicker subOnly empty onClick={(abilityId) => setAbilityPatterns((prev) => [...prev, {ability: abilityId}])}/>
            <FormHelperText>Most recent order of abilities received on gear.</FormHelperText>
          </FormControl>

          <Button onClick={() => handlePatternSearch()}>Find seed from pattern</Button>
        </Stack>
      </CardBody>
      { potentialSeeds.length > 0 &&
        <CardBody>
          <Heading size={"sm"}>Potential seeds</Heading>
          <VStack>
            {potentialSeeds.map((seed: number) => {
              return (
                <Code>{seed.toString(16)}</Code>
              )
            })}
          </VStack>
        </CardBody>
      }
    </Card>
  )
}