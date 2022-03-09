"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class LoginPage extends page_1.default {
    get inputUsername() {
        return $('#username');
    }
    get inputPassword() {
        return $('#password');
    }
    get btnSubmit() {
        return $('button[type="submit"]');
    }
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open() {
        return super.open('login');
    }
}
exports.default = new LoginPage();
//# sourceMappingURL=login.page.js.map