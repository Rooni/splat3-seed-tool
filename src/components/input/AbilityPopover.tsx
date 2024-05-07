import {Ability} from "../../types.ts";
import {
  Popover,
  PopoverArrow, PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import {AbilityButton} from "../AbilityButton.tsx";
import {AbilityPicker} from "./AbilityPicker.tsx";

type AbilityPopoverProps = {
  ability: Ability;
  onSelect: (ability: Ability) => void
}
export const AbilityPopover = ({ability, onSelect}: AbilityPopoverProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement='top'
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <AbilityButton abilityId={ability} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <PopoverArrow />
          <PopoverCloseButton />
          <AbilityPicker />
        </PopoverContent>
      </Popover>
    </>
  )
}