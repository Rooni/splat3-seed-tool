import {useSortable} from "@dnd-kit/sortable";
import GearCard from "./GearCard.tsx";
import * as types from "../types.ts";
import {CSS} from '@dnd-kit/utilities';
import {useLocalStorage} from "@uidotdev/usehooks";
import {Card} from "@chakra-ui/react";

type Props = {
  gear: types.Gear;
}
export const SortableGear = ({gear}: Props) => {
  const [gearData, setGearData] = useLocalStorage<types.Gear[]>("gear", []);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: gear.uuid});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <GearCard gear={gear}  />
    </div>
  )
}