import { Box, Heading } from "@chakra-ui/react";
import React from "react";

let Logo = (props) => {
  return (
    <Box {...props}>
      <Heading size={"md"} fontWeight="bold">
        Logo
      </Heading>
    </Box>
  );
};

export default Logo;