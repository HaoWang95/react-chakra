import { Center, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

let NotFoundPage = (props) => {
  return (
    <Layout>
      <Center>
        <Text>404 this page does not exist</Text>
      </Center>
    </Layout>
  );
};

export default NotFoundPage;
