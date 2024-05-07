import {Image} from "@chakra-ui/react";
import {getBrandData} from "../../data/brand.ts";
import {Brand} from "../../types.ts";

type BrandImageProps = {
  brand: Brand;
  [x:string]: any;
}

export const BrandImage = ({brand, ...rest}: BrandImageProps) => {
  const brandData = getBrandData(brand)
  return (
    <Image {...rest} src={brandData.image}/>
  )
}