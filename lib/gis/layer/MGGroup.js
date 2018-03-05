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
