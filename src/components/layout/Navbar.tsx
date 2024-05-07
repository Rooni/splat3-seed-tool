import {Button, HStack} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const navItems = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "My gear",
    to: "/gear"
  },
  {
    name: "Recover",
    to: "/recover"
  },
  {
    name: "Planner",
    to: "/planner"
  },
  {
    name: "Refine",
    to: "/refine"
  },
  {
    name: "Profile",
    to: "/profile"
  },
]

export const NavBar = () => {
  return (
  <HStack>
    {navItems.map((item) => {
      return <ChakraLink as={ReactRouterLink} to={item.to}>
        <Button variant={"outline"}>{item.name}</Button>
      </ChakraLink>
    })}
  </HStack>
  )
}