// import { defineConfig } from "cypress";
// import mochawesome from 'cypress-mochawesome-reporter/plugin.js';
// require('dotenv').config()


// // the default options is in the runner/ project settings // grey efault/// blue is override
// export default defineConfig({
//   viewportHeight: 1080,
//   viewportWidth: 1920,
//   chromeWebSecurity: false, // set to false to not cause navigation issues 
//   //defaultCommandTimeout : 6000, 
//  // retries:2,// will show attempts
 
//     env: {
//     SITE_URL: process.env.UI_URL,
//     UI_USERNAME: process.env.UI_USERNAME,
//     UI_PASSWORD: process.env.UI_PASSWORD
//   },
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     charts: true,
//     reportPageTitle: 'custom-title',
//     embeddedScreenshots: true,
//     inlineAssets: true,
//     saveAllAttempts: false,
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       // needs to be triggerd and created on node enviroment note browser enviroment,// workaround for that
//       // implement node event listeners here
//       mochawesome(on)
//       require('@cypress/grep/src/plugin')(config);
//       return config;
//     },
//     video: true
//   },
//;
const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  // defaultCommandTimeout: 6000,
  // retries: 2,

  env: {
    SITE_URL: process.env.UI_URL,
    UI_USERNAME: process.env.UI_USERNAME,
    UI_PASSWORD: process.env.UI_PASSWORD
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    video: true
  },
})
