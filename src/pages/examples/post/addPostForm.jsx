import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddPostSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "The title is too short!")
    .max(50, "The title is too long!")
    .required("Title is a required field"),
  content: Yup.string()
    .min(2, "The content is too short!")
    .max(200, "The content is too long!")
    .required("Content is a required field"),
});

let AddPostForm = () => {
  const addPostForm = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: AddPostSchema,
    onSubmit: (values) => {
      // print an alert first, then dispatch the data into reducers
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Flex direction={"column"} textAlign={"center"}>
      <Heading as={"h2"}>Create a new post</Heading>
      <form onSubmit={addPostForm.handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="title" textAlign={"center"}>
            Post title
          </FormLabel>
          <Input
            id="title"
            type={"text"}
            placeholder="Title"
            width={"25%"}
            onChange={addPostForm.handleChange}
            onBlur={addPostForm.handleBlur}
            value={addPostForm.values.title}
            {...addPostForm.getFieldProps("title")}
          />
          {addPostForm.errors.title && addPostForm.touched.title ? (
            <Text color="red">{addPostForm.errors.title}</Text>
          ) : null}
          <FormLabel htmlFor="content" textAlign={"center"}>
            Post content
          </FormLabel>
          <Input
            id="content"
            type={"text"}
            placeholder="Content"
            width={"25%"}
            onChange={addPostForm.handleChange}
            onBlur={addPostForm.handleBlur}
            value={addPostForm.values.content}
            {...addPostForm.getFieldProps("content")}
          />
          {addPostForm.errors.content && addPostForm.touched.content ? (
            <Text color={"red"}>{addPostForm.errors.content}</Text>
          ) : null}
        </FormControl>
        <Button
          type="submit"
          colorScheme={"cyan"}
          variant="outline"
          marginTop={"3rem"}
        >
          Submit post
        </Button>
      </form>
    </Flex>
  );
};

export default AddPostForm;
