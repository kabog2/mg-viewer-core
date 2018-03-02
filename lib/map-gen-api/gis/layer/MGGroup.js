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
    class MGGroup extends all_1.MGLayer {
        createLayer(config) {
            this._mgLayers = config.layers.map(layer => { return this.mapMgr.parseLayerConfig(layer); });
            return new ol.layer.Group({ layers: this._mgLayers.map(mgLayer => { return mgLayer.olLayer; }) });
        }
        ;
        load() {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
    }
    exports.MGGroup = MGGroup;
});
//# sourceMappingURL=MGGroup.js.map