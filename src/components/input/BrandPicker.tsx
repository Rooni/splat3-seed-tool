import {Brand} from "../../types.ts";
import {Image, IconButton, SimpleGrid} from "@chakra-ui/react";
import {getAllBrands} from "../../data/brand.ts";

type BrandPickerProps = {
  selected?: Brand[]
  onSelect?: (brand: Brand) => void
}

export const BrandPicker = ({selected, onSelect}: BrandPickerProps) => {
  const brands = getAllBrands()
  return (
    <SimpleGrid minChildWidth={"64px"} gap={2}>
      {brands.map((brand) => {
        const active = selected?.includes(brand.key)
        return <IconButton
          aria-label={brand.name}
          icon={<Image
            src={brand.image}
            w={"40px"}
            h={"40px"}
          />}
          colorScheme={active ? "green" : "gray"}
          onClick={()=> onSelect && onSelect(brand.key)}
          p={2}
          w={"64px"}
          h={"64px"}
        />
      })}
    </SimpleGrid>
  )
}