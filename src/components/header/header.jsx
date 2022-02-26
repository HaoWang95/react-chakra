import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

let Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex
      as={"nav"}
      align="center"
      justify={"space-between"}
      wrap="wrap"
      padding={6}
      bg={"teal"}
      color="white"
    >
      <Flex align={"center"} mr={5}>
        <Heading as={"h1"} size="lg" letterSpacing={"tight"}>
          <NavLink to={"/"}>React Chakra</NavLink>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Breadcrumb separator={"/"}>
          <BreadcrumbItem>
            <NavLink to={"/"}> Home </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to={"/about"}> About Me </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to={"/examples"}> Examples </NavLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          onClick={toggleColorMode}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
