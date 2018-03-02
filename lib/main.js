(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./index", "./main.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
    //import MapGen from './widgets/MapGen';
    const index_1 = require("./index");
    require("./main.css");
    const mapRoot = document.querySelector('map-gen') || undefined;
    mapRoot && new index_1.MGViewer(mapRoot);
});
//# sourceMappingURL=main.js.map