import {IconButton, Image, SimpleGrid, Tooltip} from "@chakra-ui/react";
import {brandIdMap, getBrandData} from "../data/brand.ts";

export type Props = {
  handleClick: (brand: string) => void
}
export const BrandPicker = ({handleClick}: Props) => {
  console.log()
  return (
    <SimpleGrid minChildWidth='256px' spacing={2}>
      {brandIdMap.map(getBrandData).map(({id, name, image}) => <Tooltip label={name} openDelay={500}>
        <IconButton
          aria-label={name}
          colorScheme={"whiteAlpha"}
          size="xl"
          icon={<Image src={image} />}
          onClick={() => handleClick(id)}
        />
      </Tooltip>)}
    </SimpleGrid>
  )
}