import { Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";

let AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <Flex direction={"column"} textAlign={'center'}>
      <Heading as={"h2"}>Create a new post</Heading>
      <FormControl isRequired>
          <FormLabel htmlFor="title" textAlign={'center'}>Post title</FormLabel>
          <Input 
            id="title"
            type={'text'}
            placeholder="Title"
            onChange={onTitleChanged}
            width={'25%'}
          />{title}
      </FormControl>
    </Flex>
  );
};

export default AddPostForm;
