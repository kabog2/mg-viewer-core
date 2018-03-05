(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./all"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const all_1 = require("./all");
    class MGBaseMgr extends all_1.MGBase {
        set root(root) {
            MGBaseMgr._mgRoot = root;
        }
        get root() {
            return MGBaseMgr._mgRoot;
        }
    }
    exports.MGBaseMgr = MGBaseMgr;
    exports.default = MGBaseMgr;
});
//# sourceMappingURL=MGBaseMgr.js.map