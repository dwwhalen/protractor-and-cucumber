/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:1337/',
  capabilities: {
      browserName:'chrome'
  },
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  specs: [
    './features/calculator.feature', 
  ],
  cucumberOpts: {
    require: ['./step-definitions/*.js']
  },
};