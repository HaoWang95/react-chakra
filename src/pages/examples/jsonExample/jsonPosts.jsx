import { Button, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useDispatch, useSelector } from "react-redux";
import { pageNumberDecrement, pageNumberIncrement } from "../../../reducers/pagNumberSlice";
import { getPlaceHolderPostsLimits } from "../../../services/PlaceHolderPostService";
import PostDetail from "./postItem";

let JsonPostList = () => {
  // If the user routes back from a post detail page, this page will be `refreshed and re-rendered` with page = 0
  // Consider change useState to a useContext and useReducer concept or lift the page number to a global state using redux

  //const [page, setPage] = useState(0);
  const pageNumber = useSelector(state => state.pageNumber.pageNumber);
  const pageNumberDispatch = useDispatch();
  console.log(`global page number ${pageNumber}`)
 

  useEffect(() => {
      // to eliminate the time taken by react-query to fetch data
      // for each time the pageNumber is changed, we can cache the next page in advance using the useEffect hook
    console.log(pageNumber);
    return;
  }, [pageNumber]);

  const { isLoading, error, data } = useQuery(
    ["jsonPosts", pageNumber],
    () => getPlaceHolderPostsLimits(pageNumber),
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
          disabled={pageNumber === 0 ? true : false}
          onClick={() => {
            if (pageNumber > 0) {
              //setPage((prev) => prev - 1);
              pageNumberDispatch(pageNumberDecrement());
            }
          }}
        >
          Previous Page
        </Button>
        <Text>Page {pageNumber + 1}</Text>
        <Button
          margin={"1rem"}
          variant="outline"
          colorScheme={"cyan"}
          onClick={() => {
            //setPage((prev) => prev + 1);
            pageNumberDispatch(pageNumberIncrement());
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
