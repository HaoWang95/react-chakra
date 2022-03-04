import { Button, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getPlaceHolderPostsLimits } from "../../../services/PlaceHolderPostService";
import PostDetail from "./postItem";

let JsonPostList = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    console.log(page);
    return;
  }, [page]);

  const { isLoading, error, data } = useQuery(
    ["jsonPosts", page],
    () => getPlaceHolderPostsLimits(page),
    { staleTime: 10000 }
  );
  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );
  if (error) return <Text>{error.message}</Text>;

  const renderPosts = () =>
    data.map((item) => {
      return <PostDetail id={item.id} post={item} key={item.id} />;
    });

  return (
    <>
      <Center>
        <VStack spacing={6} width="70%">
          {renderPosts()}
        </VStack>
        <ReactQueryDevtools />
      </Center>
      <Center margin={"1rem"}>
        <Button
          margin={"1rem"}
          variant="outline"
          colorScheme={"cyan"}
          disabled={page === 0 ? true : false}
          onClick={() => {
            if (page > 0) {
              setPage((prev) => prev - 1);
            }
          }}
        >
          Previous Page
        </Button>
        <Text>Page {page + 1}</Text>
        <Button
          margin={"1rem"}
          variant="outline"
          colorScheme={"cyan"}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </Button>
      </Center>
    </>
  );
};

let PostListWrapper = () => {
  return <JsonPostList />;
};

export default PostListWrapper;
