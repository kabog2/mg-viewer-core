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
