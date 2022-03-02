import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

let RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address").required("Required"),
      password: Yup.string()
        .min(10, "Password should be between 10 to 20 characters")
        .max(20, "Password should be between 10 to 20 characters"),
    }),
    onSubmit: (values) => {
      // when dealing with redux, we can dispatch the action here
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Center>
      <Box width={"40%"}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type={"email"}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <FormHelperText>Your Email</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type={"password"}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </FormControl>
          <Button
            type="submit"
            colorScheme={"cyan"}
            variant="outline"
            marginTop={"3rem"}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default RegisterForm;
