"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("../../all");
const ol = __importStar(require("openlayers"));
require("openlayers/css/ol.css");
class MGMap extends all_1.MGBase {
    constructor(config) {
        super();
        this.configure(config);
    }
    configure(config) {
        this._olMap = new ol.Map({
            target: this.viewer.root
        });
    }
    set view(view) {
        this._view = view;
        this._olMap.setView(view.olView);
    }
    set basemap(basemap) {
        if (this._basemap) {
            this._olMap.removeLayer(this._basemap.olLayer);
        }
        console.info('[MAP] Set basemap', basemap);
        this._basemap = basemap;
        this._olMap.addLayer(this._basemap.olLayer);
    }
    get basemap() {
        return this._basemap;
    }
    set layers(layers) {
        if (this._layers) {
            this._layers.forEach(layer => {
                this._olMap.removeLayer(layer.olLayer);
            });
        }
        console.info('[MAP] Set layers', layers);
        this._layers = layers;
        this._layers.forEach(layer => {
            this._olMap.addLayer(layer.olLayer);
        });
    }
    get layers() {
        return this._layers;
    }
}
exports.MGMap = MGMap;
exports.default = MGMap;
