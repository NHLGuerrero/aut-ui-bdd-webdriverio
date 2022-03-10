"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_framework_1 = require("@wdio/cucumber-framework");
const login_page_1 = __importDefault(require("../pageobjects/login.page"));
const secure_page_1 = __importDefault(require("../pageobjects/secure.page"));
const pages = {
    login: login_page_1.default
};
(0, cucumber_framework_1.Given)(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});
(0, cucumber_framework_1.When)(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await login_page_1.default.login(username, password);
});
(0, cucumber_framework_1.Then)(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(secure_page_1.default.flashAlert).toBeExisting();
    await expect(secure_page_1.default.flashAlert).toHaveTextContaining(message);
});
//# sourceMappingURL=steps.js.map