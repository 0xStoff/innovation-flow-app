import React, { useContext } from "react";
import { Typography } from "@mui/material";
import FeedbacksContext from "../../../context/feedbacksContext";
import { DeleteIcon } from "./delete";
import { EditIcon } from "./edit";
import { getCurrentUser } from "../../../services/authService";
import { DELETE_FEEDBACK, UPDATE_FEEDBACK } from "../../../graphql/graphs";
import { useQuery, useMutation } from "@apollo/client";

export const ModifyIcons = ({ feedback }) => {
  const [feedbacks, setFeedbacks] = useContext(FeedbacksContext);
  const user = getCurrentUser();

  const [deleteFeedback, { loading, error, data }] =
    useMutation(DELETE_FEEDBACK);

  const [updateFeedback, { loading: upLoading, error: upError, data: upData }] =
    useMutation(UPDATE_FEEDBACK);

  const handleDelete = () => {
    const remainingFeedbacks = feedbacks.filter((f) => f !== feedback);
    setFeedbacks(remainingFeedbacks);

    const deleteId = feedback.id;
    deleteFeedback({ variables: { deleteId } });
  };

  const doSubmit = (newData) => {
    const allFeedbacks = [...feedbacks];
    const updatedFeedback = { ...feedback };
    const index = allFeedbacks.indexOf(feedback);
    Object.keys(newData).map((key) => (updatedFeedback[key] = newData[key]));
    allFeedbacks[index] = updatedFeedback;
    setFeedbacks(allFeedbacks);

    const { title, content } = newData;
    const updateId = feedback.id;
    updateFeedback({ variables: { updateId, title, content } });
  };

  if (user.id !== feedback.author.id)
    return (
      <Typography sx={{ marginRight: "auto" }} variant="caption">
        von {feedback.author.username}
      </Typography>
    );
  return (
    <React.Fragment>
      <DeleteIcon onDelete={handleDelete} />
      <EditIcon feedback={feedback} doSubmit={doSubmit} />
    </React.Fragment>
  );
};
