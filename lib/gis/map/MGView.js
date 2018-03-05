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
const proj4x = __importStar(require("proj4"));
let proj4 = proj4x.default;
const ol = __importStar(require("openlayers"));
require("openlayers/css/ol.css");
proj4.defs("EPSG:31370", "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs");
proj4.defs("EPSG:3812", "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
ol.proj.setProj4(proj4);
class MGView extends all_1.MGBaseMgr {
    constructor(config) {
        super();
        this.configure(config);
        this.adaptView();
    }
    configure(config) {
        this.projection = config.projection;
        this._mapProjection = config.mapProjection;
        this._maxResolution = config.zooms.minScale != undefined ? this.getResolutionFromScale(config.zooms.minScale, this._mapProjection) : config.zooms.maxResolution;
        this._minResolution = config.zooms.maxScale != undefined ? this.getResolutionFromScale(config.zooms.maxScale, this._mapProjection) : config.zooms.minResolution;
    }
    adaptView() {
        this.olView = new ol.View({
            minResolution: this._minResolution,
            maxResolution: this._maxResolution,
            extent: this._maxExtent,
            projection: this.mapProjection
        });
        if (this._resolution) {
            this.olView.setResolution(this._resolution);
        }
        if (this._center) {
            this.olView.setCenter(this._center);
        }
        this.olView.on("change:center", this.onChangeCenter, this);
        this.olView.on("change:resolution", this.onChangeResolution, this);
        this.mapMgr.view = this;
    }
    onChangeCenter(event) {
        this._center = this.olView.getCenter();
    }
    onChangeResolution(event) {
        this._resolution = this.olView.getResolution();
    }
    setExtent(extent, srs) {
        srs = srs != undefined ? srs : this.projection;
        this.olView.fit(ol.proj.transformExtent(extent, srs, this.mapProjection));
    }
    centerAt(center, srs) {
        srs = srs != undefined ? srs : this.projection;
        this.center = ol.proj.transform(center, srs, this.mapProjection);
    }
    set center(center) {
        this._center = center;
        this.olView.setCenter(this._center);
    }
    get center() {
        return this._center;
    }
    set maxScale(scale) {
        this._minResolution = scale != undefined ? this.getResolutionFromScale(scale, this.mapProjection) : undefined;
        this.adaptView();
    }
    get maxScale() {
        return this._minResolution != undefined ? this.getScaleFromResolution(this._minResolution, this.mapProjection) : undefined;
    }
    set minScale(scale) {
        this._maxResolution = scale != undefined ? this.getResolutionFromScale(scale, this.mapProjection) : undefined;
        this.adaptView();
    }
    get minScale() {
        return this._maxResolution != undefined ? this.getScaleFromResolution(this._maxResolution, this.mapProjection) : undefined;
    }
    set mapProjection(projection) {
        let oldProjection = this._mapProjection;
        this._mapProjection = projection;
        if (this._center != undefined) {
            this._center = ol.proj.transform(this._center, oldProjection, this._mapProjection);
        }
        this.adaptView();
    }
    get mapProjection() {
        return this._mapProjection;
    }
}
exports.MGView = MGView;
exports.default = MGView;
