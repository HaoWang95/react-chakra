import { Box, Button, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";

const PostDetail = ({ post }) => {
  const onClick = () => {
      console.log(`onClick with post id ${post.id}`)
  }
  return (
    <Box p={5} shadow={"md"} borderWidth="1px">
      <Heading fontSize={"x-large"}>{post.title}</Heading>
      <Text mt={4}>{post.body}</Text>
      <Center>
        <Button variant={"outline"} onClick={onClick}>View More</Button>
      </Center>
    </Box>
  );
};

export default PostDetail;
