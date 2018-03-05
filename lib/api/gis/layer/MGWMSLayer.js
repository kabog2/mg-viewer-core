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
    class MGWMSLayer extends all_1.MGLayer {
        createLayer(config) {
            return this._olLayer;
        }
        load() {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
    }
    exports.MGWMSLayer = MGWMSLayer;
});
//# sourceMappingURL=MGWMSLayer.js.map