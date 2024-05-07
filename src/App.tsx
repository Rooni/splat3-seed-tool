import { useState } from 'react'

import {Button, Heading, Input, Stack} from "@chakra-ui/react";
import GearCollection from "./components/GearCollection.tsx";
import AddGear from "./components/AddGear.tsx";
import { useLocalStorage } from '@uidotdev/usehooks';


function App() {
  const [gearData] = useLocalStorage("gear", []);

  const [randomContext, setRandomContext] = useState<number>(0)


  return (
      <Stack spacing={4}>
        <AddGear/>
        <Button colorScheme='blue' onClick={() => setRandomContext(advanceSeed(randomContext))}>Advance seed</Button>
        <Input
          value={randomContext}
          onChange={(e) => {
            setRandomContext(event.target.value);
          }}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
        {randomContext.toString(16)}
        <Heading mb={4}>Gear database (local)</Heading>
        <GearCollection data={gearData}/>
      </Stack>
  )
}

export default App
