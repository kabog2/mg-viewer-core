(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./MGMapMgr", "./map/MGMap", "./map/MGView", "./layer/all"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    var MGMapMgr_1 = require("./MGMapMgr");
    exports.MGMapMgr = MGMapMgr_1.MGMapMgr;
    tslib_1.__exportStar(require("./map/MGMap"), exports);
    tslib_1.__exportStar(require("./map/MGView"), exports);
    tslib_1.__exportStar(require("./layer/all"), exports);
});
//# sourceMappingURL=all.js.map