import React, { useState, useContext } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SwipeableEdgeDrawer from "../swipeable";
import Form from "../form";
import { feedbackEditInputs } from "../../../configs/config.inputs";
import { schemaFeedback } from "../../../configs/config.schema";

export const EditIcon = ({ feedback, doSubmit }) => {
  const [openSwipeable, setOpenSwipeable] = useState(false);
  const swipeableState = { openSwipeable, setOpenSwipeable };

  feedbackEditInputs[0].value = feedback.title;
  feedbackEditInputs[1].value = feedback.content;

  const swipeableDataModify = {
    component: (
      <Form
        schemaObj={schemaFeedback}
        doSubmit={doSubmit}
        inputFields={feedbackEditInputs}
        iconSize="large"
      />
    ),
  };
  return (
    <React.Fragment>
      <EditOutlinedIcon
        sx={{ marginRight: "auto" }}
        className="clickable"
        fontSize="small"
        onClick={() => setOpenSwipeable(true)}
      />
      <SwipeableEdgeDrawer
        data={swipeableDataModify}
        swipeableState={swipeableState}
        feedback={feedback}
      />
    </React.Fragment>
  );
};
