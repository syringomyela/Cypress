const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://webdriveruniversity.com/Contact-Us',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
