import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container as ChakraContainer,
  Heading,
  Stack,
  Text,
  StackDivider, FormControl, FormLabel, Input, VStack, FormErrorMessage, Checkbox, Button
} from "@chakra-ui/react";
import {Field, Formik} from "formik";
import {useLocalStorage} from "@uidotdev/usehooks";
import * as types from "../types.ts";

const AddGear = ( {...props}) => {
  const [gearData, setGearData] = useLocalStorage<types.Gear[]>("gear", []);
  return (
    <Card {...props}>
      <CardHeader>
        <Heading size='md'>Add new gear</Heading>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={{
            name: "",
            seed: 1,
            favorite: false,
          }}
          onSubmit={(values) => {
            setGearData((prev) => [...prev, {
              uuid: crypto.randomUUID(),
              name: values.name,
              brand: "None",
              randomContext: values.seed,
              abilityHistory: [1,2,3,4,5,1,2,3,4,2,1,2]
            }]);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Gear name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="seed">Seed</FormLabel>
                  <Field
                    as={Input}
                    id="seed"
                    name="seed"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <Field
                  as={Checkbox}
                  id="favorite"
                  name="favorite"
                >
                  Favorite
                </Field>
                <Button type="submit" width="full">
                  Add
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default AddGear