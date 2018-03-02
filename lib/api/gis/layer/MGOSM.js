(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./all", "openlayers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const all_1 = require("./all");
    const ol = require("openlayers");
    class MGOSM extends all_1.MGImageLayer {
        constructor() {
            super(...arguments);
            this._tiled = true;
        }
        createTileSource(config) {
            return new ol.source.OSM();
        }
        ;
        createImageSource(config) {
            return new ol.source.ImageWMS();
        }
        ;
        load() {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
    }
    exports.MGOSM = MGOSM;
});
//# sourceMappingURL=MGOSM.js.map