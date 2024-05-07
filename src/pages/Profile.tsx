import {Card, CardBody, Code, Heading, Text, Stack, Flex, HStack} from "@chakra-ui/react";
import {ReplayCodeInput} from "../components/input/ReplayCodeInput.tsx";

import * as types from "../types.ts";
import {useProfile} from "../hooks/useProfile.tsx";

export const Profile = () => {

  const [profile, setProfile] = useProfile()


  return (
    <>
      <Heading my={4}>Profile</Heading>
      <Card>
        <CardBody>
          <Stack>
            <Heading size={"sm"}>My profile</Heading>
            {
              profile?.npln_user_id ? (
                  <HStack>
                    <Text>NPLN User ID</Text>
                    <Code>{profile?.npln_user_id}</Code>
                  </HStack>
                ):(
                <Text>NPLN User ID not set up</Text>
              )
            }
            <Heading size={"sm"}>Load from replay code</Heading>
            <ReplayCodeInput/>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}