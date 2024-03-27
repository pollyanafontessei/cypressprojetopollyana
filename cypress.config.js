const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'igjtof',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true, //gráficos
      reportTitle: 'Projeto Pollyana Cypress', //nome do relatório
      reportPageTitle: 'Projeto Pollyana Cypress', //titulo da página
    },
    baseUrl:"https://automationpratice.com.br/",
    defaultCommandTimeout:8000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
