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
class MGWMS extends all_1.MGImageLayer {
    constructor() {
        super(...arguments);
        this._loadCapabilities = true;
    }
    configureWMS(config) {
        this._urlCapabilities = config.urlCapabilities ? config.urlCapabilities : config.url + "?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0";
        this._layers = config.ids.map(id => {
            const mgLayer = new all_1.MGWMSLayer();
            mgLayer.configure(config);
            mgLayer.id = id;
            mgLayer.opacity = 1;
            mgLayer.selected = true;
            mgLayer.visible = true;
            return mgLayer;
        });
    }
    createTileSource(config) {
        this.configureWMS(config);
        config.params["LAYERS"] = config.ids.join();
        config.params["TILED"] = true;
        config.params["TILESORIGIN"] = "14722.202449434291,20841.157478806563";
        return new ol.source.TileWMS({ url: config.url, params: config.params, projection: config.projection, serverType: 'geoserver', });
    }
    ;
    createImageSource(config) {
        this.configureWMS(config);
        config.params["LAYERS"] = config.ids.join();
        return new ol.source.ImageWMS({ serverType: 'geoserver', url: config.url, params: config.params, projection: config.projection });
    }
    ;
    parseCapabilities(capabilities) {
        const parser = new ol.format.WMSCapabilities();
        return parser.read(capabilities);
    }
    configureCapabilities() {
        let capa = this._capabilities.Capability;
        if (capa != undefined) {
            !this.label && (this.label = capa.Layer.Title);
            !this.description && (this.description = capa.Layer.Abstract);
            !this._version && (this._version = capa.version);
            let extent = capa.Layer.BoundingBox[0].extent;
            let crs = capa.Layer.BoundingBox[0].crs;
            if (extent && crs) {
                // !this.extent && (this.extent = this.transformExtent(extent,crs,this.projection));
            }
            const capaLayers = capa.Layer.Layer;
            capaLayers.forEach(capaL => {
                const config = new all_1.MGConfigWMSLayer({
                    id: capaL.Name,
                    label: capaL.Title,
                    description: capaL.Abstract,
                    extent: capaL.BoundingBox[0].extent,
                    maxScale: capaL.MaxScaleDenominator,
                    minScale: capaL.MinScaleDenominator,
                    queryable: capaL.queryable
                });
                console.info("Config", config);
            });
        }
    }
}
exports.MGWMS = MGWMS;
