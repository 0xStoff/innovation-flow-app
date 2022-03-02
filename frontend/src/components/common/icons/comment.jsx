import { Grid, Typography } from "@mui/material";

export const CommentIcon = ({ onClick, length }) => {
  return (
    <Grid display="flex" justifyContent="flex-end" ml={1}>
      <i
        onClick={onClick}
        className="fa fa-comment-o clickable"
        aria-hidden="true"
      />
      <Typography variant="caption" mt={1}>
        {length ? length : ""}
      </Typography>
    </Grid>
  );
};
