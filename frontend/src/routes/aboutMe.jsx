import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grow,
  Typography,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import FeedbacksContext from "../context/feedbacksContext";
import { getCurrentUser } from "../services/authService";

export default function AboutMe() {
  const user = getCurrentUser();

  return (
    <Container maxWidth="sm">
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <Card sx={{ mb: 1, width: "md" }}>
          <CardContent>
            <Avatar sx={{ my: 2 }}>{user.username.charAt(0)}</Avatar>
            <Typography>id: {user.documentId}</Typography>
            <Typography>username: {user.username}</Typography>
            <Typography>email: {user.email}</Typography>
          </CardContent>
        </Card>
      </Grow>
    </Container>
  );
}
