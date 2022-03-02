import React from "react";
import { Icon, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const FormIcon = ({ showAddIcon, isSubmitted, iconSize }) => {
  return (
    <React.Fragment>
      {showAddIcon && (
        <Box sx={{ m: "auto" }}>
          {!isSubmitted ? (
            <IconButton type="submit">
              <AddCircleIcon fontSize={iconSize} className="clickable" />
            </IconButton>
          ) : (
            <DoneIcon fontSize={iconSize} />
          )}
        </Box>
      )}
    </React.Fragment>
  );
};

export default FormIcon;
