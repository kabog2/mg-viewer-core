"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("../../utils/all");
var MGLayerTypes;
(function (MGLayerTypes) {
    MGLayerTypes["WMS"] = "WMS";
    MGLayerTypes["WMTS"] = "WMTS";
    MGLayerTypes["ArcGIS"] = "ArcGIS";
    MGLayerTypes["XYZ"] = "XYZ";
    MGLayerTypes["OSM"] = "OSM";
    MGLayerTypes["GROUP"] = "GROUP";
})(MGLayerTypes = exports.MGLayerTypes || (exports.MGLayerTypes = {}));
;
class MGConfigLayer {
    constructor(json) {
        this.url = "";
        this.ids = [];
        this.visible = true;
        if (json) {
            all_1.MGUtils.assign(this, json);
        }
    }
}
exports.MGConfigLayer = MGConfigLayer;
class MGConfigGroupLayer extends MGConfigLayer {
}
exports.MGConfigGroupLayer = MGConfigGroupLayer;
class MGConfigOSMLayer extends MGConfigLayer {
}
exports.MGConfigOSMLayer = MGConfigOSMLayer;
class MGConfigArcGISLayer extends MGConfigLayer {
}
exports.MGConfigArcGISLayer = MGConfigArcGISLayer;
class MGConfigWMSLayer extends MGConfigLayer {
}
exports.MGConfigWMSLayer = MGConfigWMSLayer;
class MGConfigWMTSLayer extends MGConfigLayer {
}
exports.MGConfigWMTSLayer = MGConfigWMTSLayer;
class MGConfigXYZLayer extends MGConfigLayer {
}
exports.MGConfigXYZLayer = MGConfigXYZLayer;
class MGConfigLayers {
    constructor(json) {
        if (json) {
            const basemaps = json.basemaps;
            const layers = json.layers;
            this.basemaps = basemaps.map(element => {
                element.selected = element.selected != undefined ? element.selected : false;
                return this.parseJson(element);
            });
            this.layers = layers.map(element => {
                return this.parseJson(element);
            });
        }
    }
    parseJson(json) {
        switch (json.type) {
            case MGLayerTypes.ArcGIS:
                return new MGConfigArcGISLayer(json);
            case MGLayerTypes.WMS:
                return new MGConfigWMSLayer(json);
            case MGLayerTypes.WMTS:
                return new MGConfigWMTSLayer(json);
            case MGLayerTypes.XYZ:
                return new MGConfigXYZLayer(json);
            case MGLayerTypes.OSM:
                return new MGConfigOSMLayer(json);
            default:
                return new MGConfigLayer(json);
        }
    }
}
exports.MGConfigLayers = MGConfigLayers;
exports.default = MGConfigLayers;
