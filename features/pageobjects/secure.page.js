"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("./page");
/**
 * sub page containing specific selectors and methods for a specific page
 */
var SecurePage = /** @class */ (function (_super) {
    __extends(SecurePage, _super);
    function SecurePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SecurePage.prototype, "flashAlert", {
        /**
         * define selectors using getter methods
         */
        get: function () {
            return $('#flash');
        },
        enumerable: false,
        configurable: true
    });
    return SecurePage;
}(page_1.default));
exports.default = new SecurePage();
