import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import { useFormik } from "formik";

let RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Center>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type={"email"}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
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
            />
          </FormControl>
          <Button type="submit" colorScheme={'cyan'} variant='outline' marginTop={'3rem'}>Submit</Button>
        </form>
      </Box>
    </Center>
  );
};

export default RegisterForm;
