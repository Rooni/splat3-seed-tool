import {Box, Card, Tooltip} from "@chakra-ui/react";
import {QuestionIcon} from "@chakra-ui/icons";

const CustomCard = () => {
  return (
    <Card m={20}>
     La bomba
    </Card>
  )
}

export const HelpTooltip = () => {
  return (
    <Tooltip label={<CustomCard/>} fontSize='md' placement={"right-end"} hasArrow>
      <QuestionIcon />
    </Tooltip>
  )
}