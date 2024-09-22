module.exports = {
    definition: `
    type UsersPermissionsUser {
      id: ID!
      username: String
      email: String
      feedbacks: [Feedback]
    }
  `,
    query: `
    me: UsersPermissionsUser
  `,
    resolver: {
        Query: {
            me: {
                resolver: 'plugins::users-permissions.user.me',
            },
        },
    },
};