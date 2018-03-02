(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./utils/all", "./MGViewer", "./config/all", "./gis/all", "./modules/all"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("./utils/all"), exports);
    tslib_1.__exportStar(require("./MGViewer"), exports);
    tslib_1.__exportStar(require("./config/all"), exports);
    tslib_1.__exportStar(require("./gis/all"), exports);
    tslib_1.__exportStar(require("./modules/all"), exports);
});
//# sourceMappingURL=all.js.map