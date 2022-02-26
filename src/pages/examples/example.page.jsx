import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../../components/layout";

let ExampleMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="cyan"
        variant="outline"
        rightIcon={<ChevronDownIcon />}
      >
        All examples
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to={"/examples"}>Example Index</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/examples/counter"}>Redux counter example</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

let ExamplePage = () => {
  return (
    <Layout>
      <Center>
        <Heading as={"h2"}>My React Examples</Heading>
      </Center>
      <ExampleMenu />
      {/* use outlet and router to render selected components */}
      <Outlet />
    </Layout>
  );
};

export default ExamplePage;
