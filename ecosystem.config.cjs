module.exports = {
  apps: [
    {
      name: "Samh Realestate",
      port: "3003",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
