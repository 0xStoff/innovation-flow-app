import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ m: 15 }}>
      <h1>404</h1>
      <Button onClick={() => navigate("/")}>Zur Startseite</Button>
    </Container>
  );
};
export default NotFound;
