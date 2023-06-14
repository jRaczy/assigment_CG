const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
  },
  env: {
      base_url: 'https://www.snabbare.com/sv',
      mobile_viewport: (320,480),
      mobile_viewport_phone:'iphone-5',
      max_deposit_amount: '116 050,00 kr',
      run_on_mobile: 'false',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
