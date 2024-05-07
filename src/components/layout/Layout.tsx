import {Container, Heading, VStack} from "@chakra-ui/react";

import {NavBar} from "./Navbar.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <Container maxW='1200px'>

      <VStack gap={2} align='stretch'>
        <Heading my={4}>s3 gear seed checker</Heading>
        <NavBar></NavBar>
        <Outlet/>
      </VStack>
    </Container>
  )
}