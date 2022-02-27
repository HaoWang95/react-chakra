import { Accordion, Center } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./postitem";

let PostList = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <Center>
      <Accordion defaultIndex={[15]} allowToggle colorScheme={'cyan'} variant='outline'>
        {posts.map((post) => {
          return (
            <PostItem key={post.id} title={post.title} content={post.content} />
          );
        })}
      </Accordion>
    </Center>
  );
};

export default PostList;
