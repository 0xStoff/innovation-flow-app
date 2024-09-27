import {gql} from "@apollo/client";

export const APOLLO_GET_FEEDBACKS = gql`
    query Feedbacks {
        feedbacks {
            documentId
            title
            content
            author {
                documentId
                username
            }
            likes {
                documentId
                username
                email
            }
            comments {
                documentId
                content
                user {
                    username
                }
                likes {
                    documentId
                    username
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

export const GET_USERS = gql`
    query UsersPermissionsUser($email: String!) {
        usersPermissionsUsers(filters: { email: { eq: $email } }) {
            documentId
            username
            email
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
        createFeedback(data: { title: $title, content: $content, author: $userId}) {
            documentId
            title
            content
            author {
                documentId
            }
        }
    }
`;
export const DELETE_FEEDBACK = gql`
    mutation deleteFeedback($deleteId: ID!) {
        deleteFeedback(documentId: $deleteId) {
            documentId
        }
    }
`;

export const UPDATE_FEEDBACK = gql`
    mutation updateFeedback($updateId: ID!, $title: String!, $content: String!) {
        updateFeedback(documentId: $updateId, data: { title: $title, content: $content }) {
            documentId
            title
        }
    }
`;

export const LIKE_FEEDBACK = gql`
    mutation likeFeedack($feedbackId: ID!, $allLikes: [ID!]) {
        updateFeedback(documentId: $feedbackId, data: { likes: $allLikes }) {
            documentId
            title
            likes {
                documentId
            }
        }
    }
`;

export const LIKE_COMMENT = gql`
    mutation likeComment($commentId: ID!, $allLikes: [ID!]) {
        updateComment(documentId: $commentId, data: { likes: $allLikes }) {
            documentId
            likes {
                documentId
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation createComment($userId: ID!, $feedbackId: ID!, $content: String!) {
        createComment(
            data: { content: $content, user: $userId, feedback: $feedbackId }
        ) {
            documentId
            content
        }
    }
`;
