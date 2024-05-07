import {
  Select,
  chakraComponents,
  OptionBase,
  GroupBase,
  SelectComponentsConfig
} from "chakra-react-select";
import {brandIdMap, getBrandData} from "../../data/brand.ts";
import {Image} from "@chakra-ui/react";

interface BrandOption extends OptionBase {
  label: string;
  value: string;
  image: string;
}

const customComponents: SelectComponentsConfig<
  BrandOption,
  true,
  GroupBase<BrandOption>
> = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>
      <Image
        src={props.data.image}
        mr={2}
        h={10}
        w={10}
      />
      {children}
    </chakraComponents.Option>
  )
};

export const BrandSelect = () => {
  const options = brandIdMap.map(getBrandData).map((brandData) : BrandOption => {
    return {value: brandData.id, label: brandData.name, image: brandData.image}
  })
  return (
    <Select options={options} components={customComponents} onChange={(newValue) => console.log(newValue.value)}/>
  )
}