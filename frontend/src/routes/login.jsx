import { useMutation } from "@apollo/client";
import { Button, Container, Paper, Tooltip, Typography } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { loginInputs } from "../configs/config.inputs";
import { schemaUserLogin } from "../configs/config.schema";
import { LOGIN_USER } from "../graphql/graphs";
import { getCurrentUser, saveUser } from "../services/authService";
import Form from "../components/common/form";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import brueggliLogo from "../img/logo_brueggli.svg";
import InfoIcon from "@mui/icons-material/Info";

export function Login() {
  const [login, { loading, error, data, reset }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (user) navigate("/feedbacks");
    if (!error && !loading && data) {
      saveUser(data.login);
      window.location = "/feedbacks";
      // navigate("/feedbacks");

      console.log(data.login);
    }
  }, [data]);

  const showError = () => {
    toast.error("Login fehlgeschlagen, falsche Email oder Passwort", {
      toastId: "login-error",
    });
    reset();
  };

  const doSubmit = ({ email, password }) => {
    login({
      variables: {
        email,
        password,
      },
    });
    // navigate("/feedbacks");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        // marginY: 20,
      }}
    >
      <Form
        schemaObj={schemaUserLogin}
        doSubmit={doSubmit}
        inputFields={loginInputs}
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
        <Button onClick={() => navigate("/register")}>
          Neu? Hier registrieren.
        </Button>
      </Box>
    </Container>
  );
}
