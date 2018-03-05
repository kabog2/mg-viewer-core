"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("../../utils/all");
class MGConfigViewerProxy {
    constructor(json) {
        this.src = "./proxy.jsp?${url}";
        if (json) {
            all_1.MGUtils.assign(this, json);
        }
    }
}
exports.MGConfigViewerProxy = MGConfigViewerProxy;
class MGConfigViewerLoading {
    constructor(json) {
        this.text = "Chargement ...";
        this.timeout = 1000;
        this.timeoutText = "Le chargement semble prendre trop de temps...";
        if (json) {
            all_1.MGUtils.assign(this, json);
        }
    }
}
exports.MGConfigViewerLoading = MGConfigViewerLoading;
class MGConfigViewerError {
    constructor(json) {
        this.mailTo = null;
        if (json) {
            all_1.MGUtils.assign(this, json);
        }
    }
}
exports.MGConfigViewerError = MGConfigViewerError;
class MGConfigViewerCORS {
    constructor(json) {
        this.enabled = true;
        if (json) {
            all_1.MGUtils.assign(this, json);
        }
    }
}
exports.MGConfigViewerCORS = MGConfigViewerCORS;
class MGExtent {
    constructor(extent, label) {
        this.label = label ? label : null;
        this.extent = extent;
    }
}
exports.MGExtent = MGExtent;
class MGConfigViewerMapExtents {
    constructor(json) {
        this.wallonie = new MGExtent([30000, 18000, 300000, 180000], "Wallonie");
        this.belgium = new MGExtent([-100000, 0, 397000, 300000], "Belgique");
        this.init = this.wallonie;
        this.max = this.belgium;
        if (json) {
            if (json.init) {
                this.init = new MGExtent(json.init.extent, json.init.label);
            }
            this.max = json.max ? new MGExtent(json.max.extent, json.max.label) : null;
        }
    }
}
exports.MGConfigViewerMapExtents = MGConfigViewerMapExtents;
class MGConfigViewerMapZooms {
    constructor(json) {
        if (json) {
            all_1.MGUtils.assign(this, json);
        }
    }
}
exports.MGConfigViewerMapZooms = MGConfigViewerMapZooms;
class MGConfigViewerMap {
    constructor(json) {
        this.mapProjection = "EPSG:31370";
        this.projection = "EPSG:31370";
        this.extents = new MGConfigViewerMapExtents();
        this.zooms = new MGConfigViewerMapZooms();
        if (json) {
            if (json.projection) {
                this.projection = json.projection;
            }
            if (json.mapProjection) {
                this.mapProjection = json.mapProjection;
            }
            if (json.extents) {
                this.extents = new MGConfigViewerMapExtents(json.extents);
            }
            if (json.zooms) {
                this.zooms = new MGConfigViewerMapZooms(json.zooms);
            }
        }
    }
}
exports.MGConfigViewerMap = MGConfigViewerMap;
class MGConfigViewer {
    constructor(json) {
        this.label = "Viewer Map Generator";
        this.description = "Demo Viewer";
        this.proxy = new MGConfigViewerProxy();
        this.loading = new MGConfigViewerLoading();
        this.error = new MGConfigViewerError();
        this.cors = new MGConfigViewerCORS();
        this.map = new MGConfigViewerMap();
        if (json) {
            if (json.label) {
                this.label = json.label;
            }
            if (json.description) {
                this.description = json.description;
            }
            if (json.proxy) {
                this.proxy = new MGConfigViewerProxy(json.proxy);
            }
            if (json.loading) {
                this.loading = new MGConfigViewerLoading(json.loading);
            }
            if (json.error) {
                this.error = new MGConfigViewerError(json.error);
            }
            if (json.cors) {
                this.cors = new MGConfigViewerCORS(json.cors);
            }
            if (json.map) {
                this.map = new MGConfigViewerMap(json.map);
            }
        }
    }
}
exports.MGConfigViewer = MGConfigViewer;
exports.default = MGConfigViewer;
