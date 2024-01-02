const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'itmgie',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalWebKitSupport: true,
  defaultCommandTimeout: 8000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
});
