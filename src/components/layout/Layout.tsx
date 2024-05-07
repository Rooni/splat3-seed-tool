import {Container, Heading, VStack} from "@chakra-ui/react";

import {NavBar} from "./Navbar.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <Container maxW='1200px'>

      <VStack gap={2} align='stretch'>
        <Heading my={4}>splat3-seed-tool</Heading>
        <NavBar></NavBar>
        <Outlet/>
      </VStack>
    </Container>
  )
}