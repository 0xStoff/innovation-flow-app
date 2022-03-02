import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./routes/layout";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { getCurrentTheme } from "./configs/config";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <BrowserRouter>
      <ThemeProvider theme={getCurrentTheme}>
        <CssBaseline>
          <ToastContainer theme={theme} />
          <Layout />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
