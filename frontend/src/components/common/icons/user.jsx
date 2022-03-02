import React, { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import DialogBox from "../dialog";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const dialogContent = {
  title: "Möchtest du dich ausloggen?",
  action: "Ja",
  cancel: "Nein",
};

function UserIcons() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setOpenDialog(false);
    navigate("/login");
    window.location = "/";
  };

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const dialogStates = { openDialog, setOpenDialog };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginY: 5,
        marginBottom: 15,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          onClick={() => navigate("/feedbacks")}
          sx={{ marginRight: "auto" }}
        >
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => navigate("/aboutme")}>
          <PersonIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleOpen}>
          <LogoutIcon fontSize="large" />
        </IconButton>
        <DialogBox
          onClick={handleLogout}
          dialogStates={dialogStates}
          dialogContent={dialogContent}
        />
      </Box>
    </Container>
  );
}

export default UserIcons;
