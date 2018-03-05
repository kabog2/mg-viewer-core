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
class MGWMTS extends all_1.MGImageLayer {
    constructor() {
        super(...arguments);
        this._tiled = true;
        this._loadCapabilities = true;
    }
    configureWMTS(config) {
        this._urlCapabilities = config.urlCapabilities ? config.urlCapabilities : config.url + "?REQUEST=GetCapabilities&SERVICE=WMTS";
    }
    createTileSource(config) {
        this.configureWMTS(config);
        var projection = ol.proj.get(config.projection);
        var projectionExtent = projection.getExtent();
        var size = ol.extent.getWidth(projectionExtent) / 256;
        var resolutions = new Array(14);
        var matrixIds = new Array(14);
        for (var z = 0; z < 14; ++z) {
            // generate resolutions and matrixIds arrays for this WMTS
            resolutions[z] = size / Math.pow(2, z);
            matrixIds[z] = z;
        }
        return new ol.source.WMTS({ url: config.url, projection: config.projection, layer: config.ids[0], style: "", matrixSet: config.matrixSet, tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds
            }), });
    }
    ;
    createImageSource(config) {
        return new ol.source.ImageWMS();
    }
    ;
    parseCapabilities(capabilities) {
        const parser = new ol.format.WMTSCapabilities();
        return parser.read(capabilities);
    }
}
exports.MGWMTS = MGWMTS;
