(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../all"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const all_1 = require("../../all");
    class MGLayer extends all_1.MGBase {
        constructor() {
            super(...arguments);
            this._zIndex = 0;
            this._opacity = 1;
            this._visible = true;
            this._tiled = false;
            this._selected = true;
            this._loadCapabilities = false;
        }
        configure(config) {
            this._config = config;
            if (config.tiled != undefined) {
                this.tiled = config.tiled;
            }
            this.id = config.id;
            if (config.label != undefined) {
                this.label = config.label;
            }
            if (config.description != undefined) {
                this.description = config.description;
            }
            this._olLayer = this.createLayer(config);
            if (config.zIndex != undefined) {
                this.zIndex = config.zIndex;
            }
            if (config.opacity != undefined) {
                this.opacity = config.opacity;
            }
            if (config.minResolution != undefined) {
                this.minResolution = config.minResolution;
            }
            if (config.maxResolution != undefined) {
                this.maxResolution = config.maxResolution;
            }
            if (config.extent != undefined) {
                this.extent = config.extent;
            }
            if (config.visible != undefined) {
                this.visible = config.visible;
            }
            if (config.selected != undefined) {
                this.selected = config.selected;
            }
            if (config.projection != undefined) {
                this.projection = config.projection;
            }
        }
        parseCapabilities(capabilities) {
            return JSON.parse(capabilities);
        }
        load() {
            return this.getCapabilities();
        }
        configureCapabilities() {
        }
        getCapabilities() {
            return new Promise((resolve, reject) => {
                if (this._loadCapabilities && this.selected) {
                    this.get(this._urlCapabilities).then(response => {
                        this._capabilities = this.parseCapabilities(response);
                        console.info("GetCapabilities", this._capabilities);
                        this.cors = true;
                        this.configureCapabilities();
                        resolve();
                    }).catch(error => {
                        console.error("GetCapabilities", error);
                        resolve();
                    });
                }
                else {
                    resolve();
                }
            });
        }
        set olLayer(layer) {
            this._olLayer = layer;
        }
        get olLayer() {
            return this._olLayer;
        }
        set zIndex(zIndex) {
            this._zIndex = zIndex;
            this._olLayer && this._olLayer.setZIndex(this._zIndex);
        }
        get zIndex() {
            return this._zIndex;
        }
        set opacity(opacity) {
            this._opacity = opacity;
            this._olLayer && this._olLayer.setOpacity(this._opacity);
        }
        get opacity() {
            return this._opacity;
        }
        set minResolution(minResolution) {
            this._minResolution = minResolution;
            if (this._minResolution != undefined) {
                this._olLayer && this._olLayer.setMinResolution(this._minResolution);
            }
        }
        get minResolution() {
            return this._minResolution;
        }
        set maxResolution(maxResolution) {
            this._maxResolution = maxResolution;
            if (this._maxResolution != undefined) {
                this._olLayer && this._olLayer.setMaxResolution(this._maxResolution);
            }
        }
        get maxResolution() {
            return this._maxResolution;
        }
        set extent(extent) {
            this._extent = extent;
            if (this._extent != undefined) {
                this._olLayer && this._olLayer.setExtent(this._extent);
            }
        }
        get extent() {
            return this._extent;
        }
        set visible(visible) {
            this._visible = visible;
            this._olLayer && this._olLayer.setVisible(this._visible);
        }
        get visible() {
            return this._visible;
        }
        set tiled(tiled) {
            this._tiled = tiled;
        }
        get tiled() {
            return this._tiled;
        }
        set selected(selected) {
            this._selected = selected;
        }
        get selected() {
            return this._selected;
        }
    }
    exports.MGLayer = MGLayer;
    exports.default = MGLayer;
});
//# sourceMappingURL=MGLayer.js.map