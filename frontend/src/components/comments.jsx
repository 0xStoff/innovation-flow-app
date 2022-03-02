import React, { useContext, useState } from "react";
import List from "@mui/material/List";
import { Box, Container } from "@mui/material";
import RenderComments from "./common/renderComments";
import Form from "./common/form";
import { schemaComments } from "../configs/config.schema";
import { commentInput } from "../configs/config.inputs";
import { getCurrentUser } from "../services/authService";
import { ADD_COMMENT, LIKE_COMMENT } from "../graphql/graphs";
import { useMutation } from "@apollo/client";
import FeedbacksContext from "../context/feedbacksContext";
import { setLikeByUser } from "../services/feedbackServices";

export default function Comments({ feedback }) {
  const [feedbacks, setFeedbacks] = useContext(FeedbacksContext);
  const [likeComment, { loading, error, data }] = useMutation(LIKE_COMMENT);
  const [addComment, { loading: loadingC, error: errorC, data: dataC }] =
    useMutation(ADD_COMMENT);

  const user = getCurrentUser();

  const doSubmit = (newData) => {
    const allData = [...feedbacks];
    const currentFeedback = allData.find((f) => f.id === feedback.id);
    const index = allData.indexOf(currentFeedback);

    const addNewData = {
      id: user.id,
      avatar: "/static/images/avatar/1.jpg",
      username: user.username,
      likes: [],
      secondary: newData.comment,
    };

    currentFeedback.comments.push(addNewData);
    allData[index] = currentFeedback;

    setFeedbacks(allData);
    const content = newData.comment;
    const userId = user.id;
    const feedbackId = feedback.id;
    addComment({
      variables: { userId, feedbackId, content },
    });
  };

  const doLike = (comment, comments) => {
    const likes = setLikeByUser(user, comment, comments);
    const commentId = comment.id;
    likeComment({ variables: { commentId, allLikes: likes } });
  };

  return (
    <List>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 5,
        }}
      >
        <Form
          inputFields={commentInput}
          doSubmit={doSubmit}
          schemaObj={schemaComments}
        />
        <Box mr={5} marginTop={5}>
          {feedback.comments.map((comment) =>
            RenderComments(comment, feedback.comments, doLike)
          )}
        </Box>
      </Container>
    </List>
  );
}
