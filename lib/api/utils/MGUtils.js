(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dojo/core/lang", "proj4", "openlayers", "openlayers/css/ol.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lang_1 = require("@dojo/core/lang");
    const proj4x = require("proj4");
    let proj4 = proj4x.default;
    const ol = require("openlayers");
    require("openlayers/css/ol.css");
    proj4.defs("EPSG:31370", "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs");
    proj4.defs("EPSG:3812", "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
    ol.proj.setProj4(proj4);
    const DOTS_PER_INCH = 96;
    const INCHES_PER_METER = 39.37;
    class MGUtils {
        static assign(target, object) {
            lang_1.assign(target, object);
        }
        static blobToString(blob) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.addEventListener('loadend', (e) => {
                    const srcElement = e.srcElement;
                    const text = srcElement ? srcElement.result : null;
                    let result;
                    switch (blob.type) {
                        case 'application/json':
                            result = JSON.parse(text);
                            break;
                        case 'application/xml':
                        default:
                            result = text;
                    }
                    resolve(result);
                });
                reader.readAsText(blob);
            });
        }
        static get(url) {
            return new Promise((resolve, reject) => {
                fetch(url).then(response => {
                    response.blob().then(blob => {
                        this.blobToString(blob).then(result => {
                            resolve(result);
                        });
                    });
                    ;
                }).catch(error => {
                    reject(error);
                });
                ;
            });
        }
        static scaleToResolution(scale) {
            return scale / (this.getScreenResolution() * 39.37);
        }
        static getScreenResolution() {
            // create an empty element
            var div = document.createElement("div");
            // give it an absolute size of one inch
            div.style.width = "1in";
            // append it to the body
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(div);
            // read the computed width
            var style = document.defaultView.getComputedStyle(div) || div.style;
            var ppi = style.getPropertyValue('width');
            // remove it again
            body.removeChild(div);
            // and return the value
            this.ppi = parseFloat(ppi);
            return this.ppi;
        }
        static getScaleFromResolution(resolution, srs) {
            const projection = ol.proj.get(srs);
            const pointResolution = projection.getMetersPerUnit() * resolution;
            const scale = Math.round(pointResolution * DOTS_PER_INCH * INCHES_PER_METER);
            return scale;
        }
        static getResolutionFromScale(scale, srs) {
            const projection = ol.proj.get(srs);
            const resolution = Math.round(scale / (projection.getMetersPerUnit() * DOTS_PER_INCH * INCHES_PER_METER));
            return resolution;
        }
        static transformExtent(extent, srcSRS, dstSRS) {
            return ol.proj.transformExtent(extent, srcSRS, dstSRS);
        }
        static getInstance(context, name, ...args) {
            var instance = Object.create(context[name].prototype);
            instance.constructor.apply(instance, args);
            return instance;
        }
    }
    exports.MGUtils = MGUtils;
    exports.default = MGUtils;
});
//# sourceMappingURL=MGUtils.js.map