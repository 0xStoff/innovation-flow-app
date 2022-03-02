import { gql } from "@apollo/client";

export const APOLLO_GET_FEEDBACKS = gql`
  query Feedbacks {
    feedbacks {
      data {
        id
        attributes {
          title
          content
          users {
            data {
              id
              attributes {
                username
              }
            }
          }
          likes {
            data {
              id
              attributes {
                username
                email
              }
            }
          }
          comments {
            data {
              id
              attributes {
                content
                user {
                  data {
                    attributes {
                      username
                    }
                  }
                }
                likes {
                  data {
                    id
                    attributes {
                      username
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const ADD_FEEDBACK = gql`
  mutation createFeedback($userId: ID!, $title: String!, $content: String!) {
    createFeedback(data: { title: $title, content: $content, users: $userId }) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const DELETE_FEEDBACK = gql`
  mutation deleteFeedback($deleteId: ID!) {
    deleteFeedback(id: $deleteId) {
      data {
        id
      }
    }
  }
`;

export const UPDATE_FEEDBACK = gql`
  mutation updateFeedback($updateId: ID!, $title: String!, $content: String!) {
    updateFeedback(id: $updateId, data: { title: $title, content: $content }) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const LIKE_FEEDBACK = gql`
  mutation likeFeedack($feedbackId: ID!, $allLikes: [ID!]) {
    updateFeedback(id: $feedbackId, data: { likes: $allLikes }) {
      data {
        id
        attributes {
          title
          likes {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const LIKE_COMMENT = gql`
  mutation likeComment($commentId: ID!, $allLikes: [ID!]) {
    updateComment(id: $commentId, data: { likes: $allLikes }) {
      data {
        id
        attributes {
          likes {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation createComment($userId: ID!, $feedbackId: ID!, $content: String!) {
    createComment(
      data: { content: $content, user: $userId, feedback: $feedbackId }
    ) {
      data {
        id
        attributes {
          content
        }
      }
    }
  }
`;
