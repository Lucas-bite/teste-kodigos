const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // 20 segundos
  defaultCommandTimeout: 20000,

  // 60 segundos
  pageLoadTimeout: 60000,

  // 15 segundos
  requestTimeout: 15000,

  // 30 segundos
  responseTimeout: 30000,

  // 60 segundos
  execTimeout: 60000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
