(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./MGConfigMgr", "./viewer/MGConfigViewer", "./layers/MGConfigLayers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    var MGConfigMgr_1 = require("./MGConfigMgr");
    exports.MGConfigMgr = MGConfigMgr_1.MGConfigMgr;
    tslib_1.__exportStar(require("./viewer/MGConfigViewer"), exports);
    tslib_1.__exportStar(require("./layers/MGConfigLayers"), exports);
});
//# sourceMappingURL=all.js.map