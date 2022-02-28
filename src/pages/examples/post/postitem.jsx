import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { PostAuthor } from "./postAuthor";

let PostItem = (props) => {
  return (
    <AccordionItem>
      <h3>
        <AccordionButton>
          <Box textAlign={"left"} flex="1">
              <Badge variant={'solid'} colorScheme='green'>POST</Badge>{" - "}
            {props.title}
            <Badge>
                <PostAuthor userId={props.userId?props.userId:''} />
            </Badge>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h3>
      <AccordionPanel pb={4}>{props.content.substring(0, 100)}...</AccordionPanel>
    </AccordionItem>
  );
};

export default PostItem;
