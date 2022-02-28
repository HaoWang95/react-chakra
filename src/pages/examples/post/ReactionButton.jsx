import { Button } from "@chakra-ui/react";
import React from "react";

const reactions = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

let ReactionButtons = ({ post }) => {
  const reactionButtons = Object.entries(reactions).map(([name, emo]) => {
    return (
      <Button key={name} type="button">
        {emo} {post.reactions[name]}
      </Button>
    );
  });
  return <div>{reactionButtons}</div>;
};
