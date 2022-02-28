import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Center,
} from "@chakra-ui/react";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { postAdded } from "../../../reducers/postSlice";

const AddPostSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "The title is too short!")
    .max(50, "The title is too long!")
    .required("Title is a required field!"),
  content: Yup.string()
    .min(2, "The content is too short!")
    .max(200, "The content is too long!")
    .required("Content is a required field!"),
  user: Yup.string().required("An author is required!"),
});

let AddPostForm = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const addPostForm = useFormik({
    initialValues: {
      title: "",
      content: "",
      user: "",
    },
    validationSchema: AddPostSchema,
    onSubmit: (values,{resetForm}) => {
      // print an alert first, then dispatch the data into reducers
      alert(JSON.stringify(values, null, 2));
      let result =
      dispatch(postAdded(values.title, values.content, values.user));
      alert(JSON.stringify(result, null, 2))
      resetForm({});
    },
  });

  return (
    <Flex direction={"column"} textAlign={"center"} justifyContent={"center"}>
      <Heading as={"h2"}>Create a new post</Heading>
      <form onSubmit={addPostForm.handleSubmit}>
        <FormControl isRequired padding={"1rem"}>
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
          <Center>
            <Select
              placeholder="Author"
              color={"black"}
              bg="teal"
              variant={"filled"}
              width={"25%"}
              textAlign={"center"}
              marginTop="1rem"
              id="selectAuthor"
              alignItems={"center"}
              icon={<ChevronDownIcon />}
              onBlur={addPostForm.handleBlur}
              onChange={addPostForm.handleChange}
              {...addPostForm.getFieldProps('user')}
            >
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </Select>
          </Center>
          {(addPostForm.errors.user && addPostForm.touched.user) ? (
              <Text color={"red"}>{addPostForm.errors.user}</Text>
            ) : null}
          <Button
            type="submit"
            colorScheme={"cyan"}
            variant="outline"
            marginTop={"3rem"}
          >
            Submit post
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default AddPostForm;
