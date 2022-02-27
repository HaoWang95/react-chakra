import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

let ErrorBoundary = () => {
  return (
    <Layout>
      <Center>
        <Heading>There's an error when loading the page!</Heading>
      </Center>
    </Layout>
  );
};

export default ErrorBoundary;
