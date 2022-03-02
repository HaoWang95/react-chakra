import { Center, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import getPosts from "../../../services/JsonService";

let JsonPostList = () => {
  const { isLoading, error, data } = useQuery("jsonPosts", getPosts);
  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;
  console.log(data);
  return (
    <Center>
      <div>
        Post lists will be rendered here
        <ReactQueryDevtools />
      </div>
    </Center>
  );
};

let PostListWrapper = () => {
  return (
    <Center>
      <Text>Posts data will be rendered here</Text>
      <JsonPostList />
    </Center>
  );
};

export default PostListWrapper;
