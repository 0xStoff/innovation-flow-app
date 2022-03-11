import { useMutation } from "@apollo/client";
import { Box, Button, Container } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { registerInputs } from "../configs/config.inputs";
import { schemaUserRegister } from "../configs/config.schema";
import { REGISTER_USER } from "../graphql/graphs";
import { getCurrentUser, saveUser } from "../services/authService";
import Form from "../components/common/form";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [register, { loading, error, data, reset }] =
    useMutation(REGISTER_USER);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (user) navigate("/feedbacks");
    if (!error && !loading && data) {
      saveUser(data.register);
      window.location = "/feedbacks";
    }

    // if (!error && !loading && data) {
    //   saveUser(data.login);
    //   window.location = "/feedbacks";
    //   // navigate("/feedbacks");

    //   console.log(data.login);
    // }
  }, [data]);

  const showError = () => {
    toast.error("Registrierung fehlgeschlagen, Email ist bereits registriert", {
      toastId: "register-error",
    });
    navigate("/login");
    reset();
  };

  const doSubmit = ({ username, email, password }) => {
    register({
      variables: {
        username,
        email,
        password,
      },
    });
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Form
        schemaObj={schemaUserRegister}
        doSubmit={doSubmit}
        inputFields={registerInputs}
        iconSize="large"
      />
      {error && showError()}
      <Box
        sx={{
          maxWidth: 650,
          width: "75%",
          margin: "50px auto",
        }}
      >
        <Button onClick={() => navigate("/login")}>Zurück zu Login </Button>
      </Box>
    </Container>
  );
}
