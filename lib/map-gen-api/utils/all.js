(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./MGBase", "./MGBaseMgr", "./MGUtils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    var MGBase_1 = require("./MGBase");
    exports.MGBase = MGBase_1.MGBase;
    var MGBaseMgr_1 = require("./MGBaseMgr");
    exports.MGBaseMgr = MGBaseMgr_1.MGBaseMgr;
    tslib_1.__exportStar(require("./MGUtils"), exports);
});
//# sourceMappingURL=all.js.map