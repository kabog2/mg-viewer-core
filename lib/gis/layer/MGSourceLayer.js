"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("./all");
const ol = __importStar(require("openlayers"));
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
