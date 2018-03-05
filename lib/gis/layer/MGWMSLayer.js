"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("./all");
class MGWMSLayer extends all_1.MGLayer {
    createLayer(config) {
        return this._olLayer;
    }
    load() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
exports.MGWMSLayer = MGWMSLayer;
