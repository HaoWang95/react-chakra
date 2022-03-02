import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getPlaceholderPosts } from "../../../services/PlaceHolderPostService";
import PostDetail from "./postItem";

let JsonPostList = () => {
  const { isLoading, error, data } = useQuery("jsonPosts", getPlaceholderPosts);
  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  const renderPosts = () =>
    data.map((item) => {
      return <PostDetail post={item} />;
    });

  return (
    <Center>
      <VStack spacing={6} width="70%">
        {renderPosts()}
      </VStack>
      <ReactQueryDevtools />
    </Center>
  );
};

let PostListWrapper = () => {
  return <JsonPostList />;
};

export default PostListWrapper;
