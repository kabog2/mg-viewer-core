"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("./all");
class MGViewer extends all_1.MGBaseMgr {
    constructor(root) {
        super();
        this.viewer = this;
        this.root = root;
        this.mapMgr = new all_1.MGMapMgr();
        this.configMgr = new all_1.MGConfigMgr();
        this.modulesMgr = new all_1.MGModulesMgr();
        this.init();
    }
    init() {
        return new Promise((resolve, reject) => {
            this.configMgr.init().then(() => {
                this.mapMgr.configure(this.configMgr.configViewer.map, this.configMgr.configLayers);
                resolve();
            });
        });
    }
}
exports.MGViewer = MGViewer;
;
exports.default = MGViewer;
