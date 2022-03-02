import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PostDetail = ({ post }) => {
  return (
    <Box p={5} shadow={"md"} borderWidth="1px">
      <Heading fontSize={"x-large"}>{post.title}</Heading>
      <Text mt={4}>{post.body}</Text>
    </Box>
  );
};

export default PostDetail;
