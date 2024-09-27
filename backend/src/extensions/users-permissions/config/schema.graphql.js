module.exports = {
    definition: `
    extend type UsersPermissionsMe {
      documentId: String
    }
  `,
    resolvers: {
        UsersPermissionsMe: {
            documentId: {
                resolve: async (obj, options, { context }) => {
                    // Fetch the user by ID and return the documentId
                    const userId = context.state.user.id;
                    const user = await strapi.query('plugin::users-permissions.user').findOne({ id: userId });
                    return user.documentId;
                },
            },
        },
    },
};