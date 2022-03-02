import React from "react";
import Like from "./icons/like";
import { SingleComment } from "./singleComment";
import { setLikeByUser } from "../../services/feedbackServices";
import { user } from "../../configs/config";
import { LIKE_COMMENT } from "../../graphql/graphs";
import { useMutation } from "@apollo/client";

const RenderComments = (comment, comments, doLike) => {
  const { avatar, username, secondary, likes } = comment;

  const handleLike = () => {
    doLike(comment, comments);
  };

  return (
    <React.Fragment key={comment.id}>
      <SingleComment
        avatar={avatar}
        username={username}
        secondary={secondary}
      />
      <Like likes={likes} onClick={handleLike} />
    </React.Fragment>
  );
};

export default RenderComments;
