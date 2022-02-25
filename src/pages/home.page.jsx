import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

let HomePage = () => {
  return (
    <Layout>
      <Center>
        <Heading as={"h2"}>Home Content</Heading>
      </Center>
    </Layout>
  );
};

export default HomePage;
