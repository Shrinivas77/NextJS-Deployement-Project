const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mongoUser",
        mongodb_password: "HETlWokI8xPNjwZK",
        mongodb_clustername: "cluster0",
        mongodb_database: "authentication-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "mongoUser",
      mongodb_password: "HETlWokI8xPNjwZK",
      mongodb_clustername: "cluster0",
      mongodb_database: "authentication-prod",
    },
  };
};
