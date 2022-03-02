import React, { useContext } from "react";
import FeedBackCard from "./feedbackCard";
import FeedbackSkeleton from "./common/feedbackSkeleton";
import FeedbacksContext from "../context/feedbacksContext";
import { Grid } from "@mui/material";

const Feedbacks = ({ loading }) => {
  const [feedbacks] = useContext(FeedbacksContext);

  return (
    <Grid container spacing={2} alignItems="center" paddingX={5} marginY={15}>
      {loading && <FeedbackSkeleton />}
      {feedbacks.map((feedback) => (
        <React.Fragment key={feedback.id || feedback.title}>
          <Grid item xs={12} sm={6} md={3}>
            <FeedBackCard feedback={feedback} />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Feedbacks;
