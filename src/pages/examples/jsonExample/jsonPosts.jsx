import { Button, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PostPageNumberProvider } from "../../../contexts/postPageProvider";
import { postPageReducer } from "../../../contexts/postPageReducer";
import { initPostPageState } from "../../../contexts/postPageState";
import { getPlaceHolderPostsLimits } from "../../../services/PlaceHolderPostService";
import PostDetail from "./postItem";

let JsonPostList = () => {
  // If the user routes back from a post detail page, this page will be `refreshed and re-rendered` with page = 0
  // Consider change useState to a useContext and useReducer concept.
  const [page, setPage] = useState(0);
  const [state, dispatch] = useReducer(postPageReducer, initPostPageState);
  console.log(state, dispatch);

  useEffect(() => {
    console.log(page);
    console.log(state.pageNumber);
    return;
  }, [page, state]);

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
              dispatch({ type: "REDUCE_PAGE_NUMBER" });
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
          onClick={() => {
            setPage((prev) => prev + 1);
            dispatch({ type: "ADD_PAGE_NUMBER" });
          }}
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
