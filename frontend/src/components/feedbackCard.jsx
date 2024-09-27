import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Grow } from "@mui/material";
import SwipeableEdgeDrawer from "./common/swipeable";
import Like from "./common/icons/like";
import { CommentIcon } from "./common/icons/comment";
import { ModifyIcons } from "./common/icons/modify";
import { setLikeByUser } from "../services/feedbackServices";
// import { user } from "../configs/config";
import Comments from "./comments";
import FeedbacksContext from "../context/feedbacksContext";
import { ADD_COMMENT, LIKE_FEEDBACK } from "../graphql/graphs";
import { useMutation } from "@apollo/client";
import { getCurrentUser } from "../services/authService";
// import Form from "./common/Form";
// import { schemaFeedback } from "../configs/config.schema";

export default function FeedBackCard({ feedback }) {
  // const [feedbacks] = feedbackStates;
  const [likeFeedback, { loading, error, data }] = useMutation(LIKE_FEEDBACK);

  const [feedbacks, setFeedbacks] = useContext(FeedbacksContext);

  const [allLikes, setAllLikes] = useState(feedback.likes);

  const [openSwipeable, setOpenSwipeable] = useState(false);

  const user = getCurrentUser();

  const handleLike = () => {
    const likes = setLikeByUser(user, feedback, feedbacks);
    setAllLikes(likes);
    const feedbackId = feedback.id;
    likeFeedback({ variables: { feedbackId, allLikes: likes } });
  };

  const renderIcons = () => {
    return (
      <Box display="flex" justifyContent="flex-end">
        {/* <DeleteIcon /> */}
        <ModifyIcons feedback={feedback} />
        <Like likes={feedback.likes} onClick={handleLike} />
        <CommentIcon
          onClick={() => setOpenSwipeable(true)}
          length={feedback.comments.length}
        />
      </Box>
    );
  };

  const renderCard = () => {
    const { title, content } = feedback;
    const swipeableState = { openSwipeable, setOpenSwipeable };
    const swipeableDataComments = {
      title: feedback.title,
      component: <Comments feedback={feedback} />,
    };
    return (
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <Card sx={{ mb: 1 }}>
          <CardActionArea onClick={() => setOpenSwipeable(true)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <SwipeableEdgeDrawer
            data={swipeableDataComments}
            swipeableState={swipeableState}
            feedback={feedback}
          />
        </Card>
      </Grow>
    );
  };

  return (
    <React.Fragment>
      {renderCard()}
      {renderIcons()}
    </React.Fragment>
  );
}
