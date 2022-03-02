import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { APOLLO_GET_FEEDBACKS } from "../graphql/graphs";
import { Login } from "./login";
import { Register } from "./register";
import FeedbacksContext from "../context/feedbacksContext";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./aboutMe";
import UserIcons from "../components/common/icons/user";
import { getCurrentUser } from "../services/authService";
import NotFound from "./notFound";
import { changeObjectStructure } from "../services/feedbackServices";
import Home from "./feedbackOverview";
import { Header } from "../components/common/header";
import { Button } from "@mui/material";

function Layout() {
  const [feedbacks, setFeedbacks] = useState([]);
  const feedbackStates = [feedbacks, setFeedbacks];

  const user = getCurrentUser();
  const { loading, error, data, refetch } = useQuery(APOLLO_GET_FEEDBACKS);

  useEffect(() => {
    if (!loading && !error && data) {
      const feedbacks = changeObjectStructure(data);
      setFeedbacks(feedbacks);
    }
  }, [loading, error, data]);

  return (
    <FeedbacksContext.Provider value={feedbackStates}>
      <Routes>
        <Route
          path="/register"
          element={
            <React.Fragment>
              <Header />
              <Register />
            </React.Fragment>
          }
        />
        <Route
          path="/login"
          element={
            <React.Fragment>
              <Header />
              <Login />
            </React.Fragment>
          }
        />
        <React.Fragment>
          <Route
            path="/feedbacks"
            element={
              <React.Fragment>
                <UserIcons />
                <Header />
                <Home />
              </React.Fragment>
            }
          />
          <Route
            path="/aboutme"
            element={
              <React.Fragment>
                {!user && <Navigate to="/login" />}
                <UserIcons />
                <AboutMe />
              </React.Fragment>
            }
          />
        </React.Fragment>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </FeedbacksContext.Provider>
  );
}

export default Layout;
