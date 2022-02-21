module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b0bd89a74489c4c993b63de0cb4e21d5'),
  },
});
