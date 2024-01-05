const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "itmgie",
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
  reporter: "mochawesome",

  testFiles: "**/*.feature",

  // retries: {
  //   // Configure retry attempts for `cypress run`
  //   // Default is 0
  //   runMode: 1,
  //   // Configure retry attempts for `cypress open`
  //   // Default is 0
  //   openMode: 0,
  // },
});
