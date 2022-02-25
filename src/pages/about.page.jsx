import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

let AboutPage = () => {
  return (
    <Layout>
      <Center h="fit-content">
        <Heading as={"h2"}>About me</Heading>
      </Center>
    </Layout>
  );
};

export default AboutPage;
