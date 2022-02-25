import { Center, Spinner } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";

let LoadingPage = (props) => {
  return (
    <Layout>
      <Center>
        <Spinner
          size={"lg"}
          color="teal"
          emptyColor="grey.200"
          thickness="4px"
          speed="0.5s"
        />
      </Center>
    </Layout>
  );
};

export default LoadingPage;
