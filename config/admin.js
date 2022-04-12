module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b8ffde854a88e8f269d5c03d5f55bfc'),
  },
});
