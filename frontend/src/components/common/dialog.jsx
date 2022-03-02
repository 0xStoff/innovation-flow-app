import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function DialogBox({ onClick, dialogStates, dialogContent }) {
  const { openDialog, setOpenDialog } = dialogStates;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{dialogContent.title}</DialogTitle>
      {!dialogContent.content ? null : (
        <DialogContent>
          <DialogContentText>{dialogContent.content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          {dialogContent.cancel}
        </Button>
        <Button onClick={onClick}>{dialogContent.action}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;
