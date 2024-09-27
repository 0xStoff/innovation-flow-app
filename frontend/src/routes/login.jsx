import { useMutation, useQuery } from "@apollo/client";
import { Button, Container, Box } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { loginInputs } from "../configs/config.inputs";
import { schemaUserLogin } from "../configs/config.schema";
import { APOLLO_GET_FEEDBACKS, GET_USERS, LOGIN_USER } from "../graphql/graphs";
import { getCurrentUser, saveUser } from "../services/authService";
import Form from "../components/common/form";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [login, { loading, error, data, reset }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  const user = getCurrentUser();

  const { data: userData, refetch } = useQuery(GET_USERS, {
    variables: { email: user?.email },
    skip: !user,
  });

  useEffect(() => {
    if (user) {
      navigate("/feedbacks");
    }

    if (!error && !loading && data && !user) {
      refetch({
        email: data.login.user.email,
      }).then((result) => {
        saveUser(data.login, result.data.usersPermissionsUsers[0]);
        window.location = "/feedbacks";
      });
    }
  }, [data, error, loading, navigate, user, refetch]);

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
  };

  return (
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Form
            schemaObj={schemaUserLogin}
            doSubmit={doSubmit}
            inputFields={loginInputs}
            iconSize="large"
        />
        {error && showError()}
        <Box sx={{ maxWidth: 650, width: "75%", margin: "50px auto" }}>
          <Button onClick={() => navigate("/register")}>
            Neu? Hier registrieren.
          </Button>
        </Box>
      </Container>
  );
}