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
    class MGArcGIS extends all_1.MGImageLayer {
        constructor() {
            super(...arguments);
            this._loadCapabilities = true;
        }
        configureArcGIS(config) {
            this._urlCapabilities = config.urlCapabilities ? config.urlCapabilities : config.url + "?f=json";
        }
        createTileSource(config) {
            this.configureArcGIS(config);
            return new ol.source.TileArcGISRest({ url: config.url });
        }
        ;
        createImageSource(config) {
            this.configureArcGIS(config);
            return new ol.source.ImageArcGISRest({ url: config.url, projection: config.projection });
        }
        ;
    }
    exports.MGArcGIS = MGArcGIS;
});
//# sourceMappingURL=MGArcGIS.js.map