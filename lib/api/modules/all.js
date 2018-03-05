(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MGModulesMgr"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MGModulesMgr_1 = require("./MGModulesMgr");
    exports.MGModulesMgr = MGModulesMgr_1.MGModulesMgr;
});
//# sourceMappingURL=all.js.map