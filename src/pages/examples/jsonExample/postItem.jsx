import { Box, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <Box p={5} shadow={"md"} borderWidth="1px">
      <Heading fontSize={"x-large"}>{post.title}</Heading>
      <Text mt={4}>{post.body}</Text>
      <Center>
        <Link to={`/examples/jsonPosts/${post.id}`}>
            <Text color="teal">View More</Text>
        </Link>
      </Center>
    </Box>
  );
};

export default PostDetail;
