import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../../components/layout";

let ExampleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu isLazy>
      {console.log("menu rendered")}
      <MenuButton
        as={Button}
        colorScheme="cyan"
        variant="outline"
        rightIcon={menuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        All examples
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to={"/examples"}>Example Index</Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Link to={"/examples/counter"}>Redux Counter Example</Link>
        </MenuItem>
        <MenuDivider />
        <MenuGroup title="Posts">
          <MenuItem>
            <Link to={"/examples/posts"}>Blog Posts Example</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/examples/addPost"}>Add new blog posts</Link>
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Formik Examples">
          <Link to={"/examples/registerFormik"}>Formik Register Form</Link>
        </MenuGroup>
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
