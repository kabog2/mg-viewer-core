"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("../all");
require("openlayers/css/ol.css");
class MGMapMgr extends all_1.MGBaseMgr {
    constructor() {
        super(...arguments);
        this._layerTypes = {
            'ArcGIS': all_1.MGArcGIS, 'WMS': all_1.MGWMS, 'WMTS': all_1.MGWMTS, 'XYZ': all_1.MGXYZ, 'OSM': all_1.MGOSM, 'Layer': all_1.MGLayer, 'Group': all_1.MGGroup
        };
    }
    configure(mapConfig, layersConfig) {
        this.configureMap(mapConfig);
        this.configureLayers(layersConfig).then(values => {
            this.selectBasemap();
            this.selectLayers();
        });
    }
    configureMap(mapConfig) {
        this._view = new all_1.MGView(mapConfig);
        this._map = new all_1.MGMap(mapConfig);
        this._map.view = this._view;
        this._view.setExtent(mapConfig.extents.init.extent);
    }
    set view(view) {
        this._view = view;
        this.map && (this.map.view = this.view);
    }
    set map(map) {
        this._map = map;
    }
    get view() {
        return this._view;
    }
    get map() {
        return this._map;
    }
    configureLayers(layersConfig) {
        let isBasemapSelected = false;
        this._basemaps = layersConfig.basemaps.map(config => {
            config.selected = !isBasemapSelected && config.selected;
            isBasemapSelected = isBasemapSelected || config.selected == true;
            config.zIndex = 0;
            let mgLayer = this.parseLayerConfig(config);
            return mgLayer;
        });
        if (!isBasemapSelected && this._basemaps[0]) {
            this._basemaps[0].selected = true;
        }
        this._layers = layersConfig.layers.map(layer => {
            layer.zIndex = 1;
            let mgLayer = this.parseLayerConfig(layer);
            return mgLayer;
        });
        const promises = new Array();
        this._basemaps.forEach(layer => {
            promises.push(layer.load());
        });
        this._layers.forEach(layer => {
            promises.push(layer.load());
        });
        return Promise.all(promises);
    }
    selectBasemap() {
        this._map.basemap = this._basemaps.filter(mgLayer => {
            return mgLayer.selected;
        })[0];
    }
    selectLayers() {
        this._map.layers = this._layers.filter(mgLayer => {
            return mgLayer.selected;
        });
    }
    addLayerType(name, type) {
        this._layerTypes[name] = type;
    }
    parseLayerConfig(config) {
        let layer;
        switch (config.type) {
            case all_1.MGLayerTypes.ArcGIS:
                layer = new all_1.MGArcGIS();
                break;
            case all_1.MGLayerTypes.WMS:
                layer = new all_1.MGWMS();
                break;
            case all_1.MGLayerTypes.WMTS:
                layer = new all_1.MGWMTS();
                break;
            case all_1.MGLayerTypes.XYZ:
                layer = new all_1.MGXYZ();
                break;
            case all_1.MGLayerTypes.OSM:
                layer = new all_1.MGOSM();
                break;
            case all_1.MGLayerTypes.GROUP:
                layer = new all_1.MGGroup();
                break;
            default:
                layer = new all_1.MGOSM();
        }
        layer.configure(config);
        return layer;
    }
}
exports.MGMapMgr = MGMapMgr;
exports.default = MGMapMgr;
