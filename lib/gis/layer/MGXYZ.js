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
class MGXYZ extends all_1.MGImageLayer {
    constructor() {
        super(...arguments);
        this._tiled = true;
    }
    createTileSource(config) {
        return new ol.source.XYZ({ url: config.url });
    }
    ;
    createImageSource(config) {
        return new ol.source.ImageWMS();
    }
    ;
    load() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
exports.MGXYZ = MGXYZ;
