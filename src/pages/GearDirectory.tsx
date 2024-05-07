import {Heading} from "@chakra-ui/react";
import { GearContainer } from "../components/GearContainer.tsx";

export const GearDirectory = () => {

  return (
    <>
      <Heading my={4}>Gear directory</Heading>
      <GearContainer/>
    </>
  )
}