"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },
    specs: [
        './portafolio/**/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec', 'junit', ['allure', { outputDir: 'allure-results' }]],
    cucumberOpts: {
        require: ['./portafolio/step-definitions/steps.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    afterStep: async function () {
        await browser.takeScreenshot();
    },
};
//# sourceMappingURL=wdio.conf.js.map