import { Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Perhaps consider to route this component into a single page

let PostItemPage = () => {
  let params = useParams();
  let navigate = useNavigate();
  return (
    <Flex direction={"column"}>
      <Center direction="column">
        <Text>{`Post ${params.postId}`}</Text>
      </Center>
      <Center>
        <Button width={"fit-content"} onClick={() => navigate(-1)}>
          Back
        </Button>
      </Center>
    </Flex>
  );
};

export default PostItemPage;
