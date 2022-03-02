import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const SingleComment = ({ avatar, username, primary, secondary }) => {
  return (
    <ListItem sx={{ mt: 2 }}>
      <ListItemAvatar sx={{ marginBottom: "auto" }}>
        <Avatar alt={username} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "flex" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {username}
            </Typography>
            {secondary}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
