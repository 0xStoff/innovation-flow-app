import { Grid, Typography } from "@mui/material";
import React from "react";
import { getCurrentUser } from "../../../services/authService";

const Like = ({ onClick, likes }) => {
  const user = getCurrentUser();

  let classes = "clickable heartIcon fa fa-heart";
  let increment = likes.length;
  const findById = user ? likes.find((id) => id == user.documentId) : null;
  if (!findById) classes += "-o";
  if (increment === 0) increment = "";

  return (
    <Grid display="flex" justifyContent="flex-end">
      <i onClick={onClick} className={classes} aria-hidden="true" />
      <Typography variant="caption" mt={1}>
        {increment}
      </Typography>
    </Grid>
  );
};

export default Like;
