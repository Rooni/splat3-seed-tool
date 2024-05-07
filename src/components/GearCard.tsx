import {Card, CardBody, CardFooter, CardHeader, CloseButton, Flex, Heading, Spacer, Tooltip} from "@chakra-ui/react";
import * as types from "../types.ts";
import {useLocalStorage} from "@uidotdev/usehooks";

export type Props = {
  gear: types.Gear;
}
const GearCard = ({gear, ...props}: Props) => {
  const [gearData, setGearData] = useLocalStorage<types.Gear[]>("gear", []);

  return (
    <Card {...props}>
      <CardHeader>
        <Flex>
          <Heading size={"md"}><Tooltip label={gear.uuid} >{gear.name}</Tooltip></Heading>
          <Spacer />
          <CloseButton onClick={() => setGearData((prev: types.Gear[]) => prev.filter((item) => item.uuid != gear.uuid))}/>
        </Flex>
      </CardHeader>
      <CardBody>
        blah
      </CardBody>
      <CardFooter>Random seed: 0x{Number(gear.randomContext).toString(16)}</CardFooter>
    </Card>
  )
}

export default GearCard