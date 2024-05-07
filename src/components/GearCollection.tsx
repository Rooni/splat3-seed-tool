import {SimpleGrid} from "@chakra-ui/react";
import * as types from "../types.ts";
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {arrayMove, SortableContext} from "@dnd-kit/sortable";
import {SortableGear} from "./SortableGear.tsx";
import {useLocalStorage} from "@uidotdev/usehooks";

type Props = {
  data: types.Gear[];
}

const GearCollection = ({data}: Props) => {
  const [gearData, setGearData] = useLocalStorage<types.Gear[]>("gear", []);

  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;
    console.log(active)
    console.log(over)
    if (active.id !== over?.id) {
      setGearData((gear) => {
        const oldIndex = gear.findIndex((g: types.Gear) => g.uuid == active.id);
        const newIndex = gear.findIndex((g: types.Gear) => g.uuid == over.id);

        return arrayMove(gear, oldIndex, newIndex);
      });
    }
  }
  return (

    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <DndContext
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={Array.from(data, (gear) => gear.uuid)}>
          { data.map((gear) => <SortableGear key={gear.uuid} gear={gear}/>)}
        </SortableContext>
      </DndContext>
    </SimpleGrid>
  )
}

export default GearCollection