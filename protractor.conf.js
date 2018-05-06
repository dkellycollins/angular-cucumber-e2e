// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome',
    // For Travis CI only
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    'require-module': 'ts-node/register',
    require: ['./e2e/**/*.ts'],
    format: 'progress-bar'
  },
  specs: ['./e2e/**/*.feature'],
};
