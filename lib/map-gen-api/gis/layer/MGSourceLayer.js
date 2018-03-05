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
    class MGSourceLayer extends all_1.MGLayer {
        createLayer(config) {
            let layer;
            if (this.tiled) {
                this._sourceTiled = this.createTileSource(config);
                this._layerTiled = layer = new ol.layer.Tile({
                    source: this._sourceTiled
                });
            }
            else {
                this._sourceImage = this.createImageSource(config);
                this._layerImage = layer = new ol.layer.Image({
                    source: this._sourceImage
                });
            }
            return layer;
        }
        get source() {
            if (this.tiled) {
                return this._sourceTiled;
            }
            else {
                return this._sourceImage;
            }
        }
        get layer() {
            if (this.tiled) {
                return this._layerTiled;
            }
            else {
                return this._layerImage;
            }
        }
    }
    exports.MGSourceLayer = MGSourceLayer;
});
//# sourceMappingURL=MGSourceLayer.js.map