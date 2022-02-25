import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

let ExamplePage = () => {
  return (
    <Layout>
      <Center>
        <Heading as={"h2"}>My React Examples</Heading>
      </Center>
    </Layout>
  );
};

export default ExamplePage;
