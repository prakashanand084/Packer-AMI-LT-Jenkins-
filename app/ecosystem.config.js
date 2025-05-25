module.exports = {
  apps: [{
    name: "node-app",
    script: "./index.js",
    watch: true,
    env: {
      NODE_ENV: "production"
    }
  }]
}
