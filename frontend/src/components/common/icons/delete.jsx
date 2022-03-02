import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React, { useContext, useState } from "react";
import DialogBox from "../dialog";

export const DeleteIcon = ({ onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const dialogStates = { openDialog, setOpenDialog };
  const dialogContent = {
    title: "Möchtest du dein Feedback wirklich löschen?",
    content: "Diese Aktion kann nicht rückgängig gemacht werden",
    action: "Ja",
    cancel: "Nein",
  };

  return (
    <React.Fragment>
      <DeleteOutlinedIcon
        onClick={handleOpenDialog}
        sx={{ marginRight: "2px" }}
        className="clickable"
        fontSize="small"
      />{" "}
      <DialogBox
        onClick={onDelete}
        dialogStates={dialogStates}
        dialogContent={dialogContent}
      />
    </React.Fragment>
  );
};
