module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86a02d097661ee90829a801d324a4cb7'),
  },
});
