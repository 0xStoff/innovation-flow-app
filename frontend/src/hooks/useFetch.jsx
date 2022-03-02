import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  ADD_FEEDBACK,
  APOLLO_GET_FEEDBACKS,
  REGISTER_USER,
} from "../graphql/graphs";

export const useFetch = () => {
  const { loading, error, data, refetch } = useQuery(APOLLO_GET_FEEDBACKS);
  useEffect(() => {
    if (!loading && !error && data) {
      const feedbacks = data.feedbacks.data.map((u) => {
        const author = {
          id: u.attributes.users.data.id,
          username: u.attributes.users.data.attributes.username,
        };

        const comments = u.attributes.comments.data.map((c) => {
          const likes = c.attributes.likes.data.map((l) => l.id);
          return {
            avatar: "/avatar.png",
            username: c.attributes.user.data.attributes.username,
            secondary: c.attributes.content,
            likes: likes,
          };
        });

        return {
          id: u.id,
          title: u.attributes.title,
          content: u.attributes.content,
          likes: u.attributes.likes.data.map((l) => l.id),
          // likes: [1, 2, 3],
          author: author,
          comments: comments,
        };
      });

      //   setFeedbacks(feedbacks);
    }
  }, [loading, error, data]);
  return { loading, error, data };
};
