/**
 * WebdriverIO config file to run tests for API. 
 * I'd totally do this differently. Maybe use Ruby or Python
 * No need to launch the device each time but, oh well, for now.
 */
const chai = require('chai');
const openLibApiService = require('./utils/openLibApiService');

const host = '127.0.0.1'; // default appium host
const port = 4723; // default appium port

exports.config = {
    host: host,
    port: port,

    debug: true,
    specs: ['./tests/specs/api/*spec.js', ],
    maxInstances: 1,

    capabilities: [{
        appiumVersion: '1.6.1', // Appium module version
        browserName: '', // browser name is empty for native apps
        platformName: 'Android',
        app: './BookSearch.apk', // Path to your native app
        platformVersion: '8.0.0', // Android platform version of the device
        deviceName: 'Nexus 5X API 26', // device name of the mobile device
        waitforTimeout: 60000,
    }],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: 60000,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: 60000,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    reporters: ['spec'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-register']
    },

    before: () => {
        global.openLib = new openLibApiService();
        global.expect = chai.expect;
    }

};