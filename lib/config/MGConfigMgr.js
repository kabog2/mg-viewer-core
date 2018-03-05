"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("../all");
class MGConfigMgr extends all_1.MGBaseMgr {
    get default() {
        return null;
    }
    init() {
        return new Promise((resolve, reject) => {
            console.info("ConfigMgr");
            if (this.root) {
                let configJSON = this.root.getAttribute("config");
                let config = this.default;
                if (configJSON) {
                    config = JSON.parse(configJSON);
                }
                console.info(config, config.viewer);
                const promiseViewer = this.get(config.viewer);
                const promiseLayers = this.get(config.layers);
                Promise.all([promiseViewer, promiseLayers]).then(json => {
                    console.info(json);
                    const jsonViewer = json[0];
                    const jsonLayers = json[1];
                    this.configViewer = new all_1.MGConfigViewer(jsonViewer);
                    this.configLayers = new all_1.MGConfigLayers(jsonLayers);
                    console.info("Viewer Config : ", jsonViewer, this.configViewer);
                    console.info("Layers Config : ", jsonLayers, this.configLayers);
                    resolve();
                });
            }
        });
    }
}
exports.MGConfigMgr = MGConfigMgr;
exports.default = MGConfigMgr;
