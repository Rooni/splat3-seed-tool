import * as types from "../types.ts";
import {Card, CardBody, Heading, Stack, Text, Image, Code, Grid, GridItem, CardHeader, VStack} from "@chakra-ui/react";
import {getBrandData} from "../data/brand.ts";
import {getAbilityData} from "../data/abilities.ts";

type Props = {
  data: types.Gear;
}

export const GearDetail = ({data}: Props) => {
  const brandData = getBrandData(data.brand)

  const commonAbility = getAbilityData(brandData.commonAbility);
  const uncommonAbility = getAbilityData(brandData.uncommonAbility);
  return (
    <Grid
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={4}>
        <Card>

          <Stack>
            <CardBody>
              <Heading size='md'>Name</Heading>
              <Text py='2'>
                {data.name}
              </Text>
              <Heading size='md'>Current seed</Heading>
              <Code>
                0x{data.randomContext?.toString(16) || 0}
              </Code>
              <Heading size='md'>Brand</Heading>
              <Image src={brandData.image}></Image>
            </CardBody>
          </Stack>
        </Card>
      </GridItem>
      <GridItem colSpan={1} >
        <Card>
          <CardBody>

            <Heading size="md">Common ability</Heading>
            <VStack>
              <Image src={commonAbility.image} w={24}/>
              <Text>{commonAbility.name}</Text>
            </VStack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={1}>
        <Card>
          <CardBody>
            <Heading size="md">Uncommon ability</Heading>
            <Image src={uncommonAbility.image} w={24}/>
            {uncommonAbility.name}
          </CardBody>
        </Card>
      </GridItem>
    </Grid>

  )
}