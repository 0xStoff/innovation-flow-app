import React, { useContext } from "react";
import Feedbacks from "../components/feedbacks";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT, ADD_FEEDBACK } from "../graphql/graphs";
import { Navigate } from "react-router-dom";
import UserIcons from "../components/common/icons/user";
import { schemaFeedback } from "../configs/config.schema";
import { feedbackInputs } from "../configs/config.inputs";
import Form from "../components/common/form";
import { getCurrentUser } from "../services/authService";
import FeedbacksContext from "../context/feedbacksContext";

function Home() {
  const user = getCurrentUser();
  const [feedbacks, setFeedbacks] = useContext(FeedbacksContext);
  const [addFeedback, { loading, error, data }] = useMutation(ADD_FEEDBACK);

  const doSubmit = (newData) => {
    const allData = [...feedbacks];
    const addNewData = {
      author: { id: user.documentId, username: user.username },
      comments: [],
      likes: [],
      ...newData,
    };
    allData.unshift(addNewData);
    setFeedbacks(allData);

    const { content, title } = newData;
    const userId = user.documentId;
    addFeedback({ variables: { userId, title, content } });
  };

  return (
    <React.Fragment>
      {!user && <Navigate to="/login" />}
      <Form
        schemaObj={schemaFeedback}
        doSubmit={doSubmit}
        inputFields={feedbackInputs}
        iconSize="large"
      />
      <Feedbacks loading={loading} />
    </React.Fragment>
  );
}

export default Home;
