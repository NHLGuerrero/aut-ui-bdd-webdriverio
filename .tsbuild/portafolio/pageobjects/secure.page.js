"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
class SecurePage extends page_1.default {
    get flashAlert() {
        return $('#flash');
    }
}
exports.default = new SecurePage();
//# sourceMappingURL=secure.page.js.map