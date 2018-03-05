(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "../../config/all", "./MGLayer", "./MGSourceLayer", "./MGImageLayer", "./MGVectorLayer", "./MGArcGIS", "./MGGroup", "./MGOSM", "./MGWMSLayer", "./MGWMS", "./MGWMTS", "./MGXYZ"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    tslib_1.__exportStar(require("../../config/all"), exports);
    var MGLayer_1 = require("./MGLayer");
    exports.MGLayer = MGLayer_1.MGLayer;
    var MGSourceLayer_1 = require("./MGSourceLayer");
    exports.MGSourceLayer = MGSourceLayer_1.MGSourceLayer;
    var MGImageLayer_1 = require("./MGImageLayer");
    exports.MGImageLayer = MGImageLayer_1.MGImageLayer;
    var MGVectorLayer_1 = require("./MGVectorLayer");
    exports.MGVectorLayer = MGVectorLayer_1.MGVectorLayer;
    var MGArcGIS_1 = require("./MGArcGIS");
    exports.MGArcGIS = MGArcGIS_1.MGArcGIS;
    var MGGroup_1 = require("./MGGroup");
    exports.MGGroup = MGGroup_1.MGGroup;
    var MGOSM_1 = require("./MGOSM");
    exports.MGOSM = MGOSM_1.MGOSM;
    var MGWMSLayer_1 = require("./MGWMSLayer");
    exports.MGWMSLayer = MGWMSLayer_1.MGWMSLayer;
    var MGWMS_1 = require("./MGWMS");
    exports.MGWMS = MGWMS_1.MGWMS;
    var MGWMTS_1 = require("./MGWMTS");
    exports.MGWMTS = MGWMTS_1.MGWMTS;
    var MGXYZ_1 = require("./MGXYZ");
    exports.MGXYZ = MGXYZ_1.MGXYZ;
});
//# sourceMappingURL=all.js.map