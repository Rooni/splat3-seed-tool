import {Card, CardBody, Heading, Stack} from "@chakra-ui/react";
import {GearContainer} from "../components/GearContainer.tsx";
import {BrandPicker} from "../components/input/BrandPicker.tsx";
import {Ability, Brand, GearType} from "../types.ts";
import {useState} from "react";
import {GearTypePicker} from "../components/input/GearTypePicker.tsx";
import {AbilityPicker} from "../components/input/AbilityPicker.tsx";
import {createSearchParams, useNavigate} from "react-router-dom";
import {GearData} from "../data/gear.ts";
import {getGearInitialSeed} from "../utils/gearseed.ts";

export const GearDirectory = () => {
  const [brandFilter, setBrandFilter] = useState<Brand[]>([])
  const [gearTypeFilter, setGearTypeFilter] = useState<GearType[]>([])
  const [abilityFilter, setAbilityFilter] = useState<Ability[]>([])

  const navigate = useNavigate()

  const handleBrandSelect = (brand: Brand) => {
    setBrandFilter((prevState) => {
      if (prevState.includes(brand)) {
        return prevState.filter((b) => brand != b)
      } else {
        return [...prevState, brand]
      }
    })
  }
  const handleGearTypeSelect = (gearType: GearType) => {
    setGearTypeFilter((prevState) => {
      if (prevState.includes(gearType)) {
        return prevState.filter((b) => gearType != b)
      } else {
        return [...prevState, gearType]
      }
    })
  }
  const handleAbilitySelect = (ability: Ability) => {
    setAbilityFilter((prevState) => {
      if (prevState.includes(ability)) {
        return prevState.filter((b) => ability != b)
      } else {
        return [...prevState, ability]
      }
    })
  }

  return (
    <>
      <Heading my={4}>Gear directory</Heading>
      <Card>
        <CardBody>
          <Stack>
            <Heading size={"sm"}>Main ability filter</Heading>
            <AbilityPicker selected={abilityFilter} onSelect={handleAbilitySelect}></AbilityPicker>
            <Heading size={"sm"}>Gear type filter</Heading>
            <GearTypePicker selected={gearTypeFilter} onSelect={handleGearTypeSelect}></GearTypePicker>
            <Heading size={"sm"}>Brand filter</Heading>
            <BrandPicker selected={brandFilter} onSelect={handleBrandSelect}></BrandPicker>
            <GearContainer
              brandFilter={brandFilter}
              typeFilter={gearTypeFilter}
              abilityFilter={abilityFilter}
              onSelect={(gear: GearData) => {
                navigate({
                    pathname: "/gear/add/", search: createSearchParams({
                      gearKey: gear.key,
                    }).toString()
                  }
                )
                getGearInitialSeed("u-aggaiwieeknzhzrnrnmm", gear.id, gear.type)

              }
              }
            />
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}