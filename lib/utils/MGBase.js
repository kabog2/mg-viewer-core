"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("../all");
class MGBase {
    set viewer(viewer) {
        MGBase._mgViewer = viewer;
    }
    set mapMgr(mapMgr) {
        MGBase._mgMapMgr = mapMgr;
    }
    set modulesMgr(modulesMgr) {
        MGBase._mgModulesMgr = modulesMgr;
    }
    set configMgr(configMgr) {
        MGBase._mgConfigMgr = configMgr;
    }
    get viewer() {
        return MGBase._mgViewer;
    }
    get mapMgr() {
        return MGBase._mgMapMgr;
    }
    get modulesMgr() {
        return MGBase._mgModulesMgr;
    }
    get configMgr() {
        return MGBase._mgConfigMgr;
    }
    assign(object) {
        all_1.MGUtils.assign(this, object);
    }
    get(url) {
        return all_1.MGUtils.get(url);
    }
    getScaleFromResolution(resolution, srs) {
        return all_1.MGUtils.getScaleFromResolution(resolution, srs);
    }
    getResolutionFromScale(scale, srs) {
        return all_1.MGUtils.getResolutionFromScale(scale, srs);
    }
    transformExtent(extent, srcSRS, dstSRS) {
        return all_1.MGUtils.transformExtent(extent, srcSRS, dstSRS);
    }
}
exports.MGBase = MGBase;
exports.default = MGBase;
