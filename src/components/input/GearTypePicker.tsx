import {GearType} from "../../types.ts";
import {HStack, Button} from "@chakra-ui/react";

type GearTypePickerProps = {
  selected?: GearType[]
  onSelect?: (type: GearType) => void
}

export const GearTypePicker = ({selected, onSelect}: GearTypePickerProps) => {
  const types = [GearType.Head, GearType.Clothes, GearType.Shoes]
  return (
    <HStack gap={2}>
      {types.map((gearType) => {
        const active = selected?.includes(gearType)
        return <Button
          aria-label={gearType}
          colorScheme={active ? "green" : "gray"}
          onClick={()=> onSelect && onSelect(gearType)}
        >
          {gearType}
        </Button>
      })}
    </HStack>
  )
}