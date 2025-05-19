const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z4wnxq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}"
  },
});
