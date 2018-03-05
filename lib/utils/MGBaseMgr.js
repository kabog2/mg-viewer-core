"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("./all");
class MGBaseMgr extends all_1.MGBase {
    set root(root) {
        MGBaseMgr._mgRoot = root;
    }
    get root() {
        return MGBaseMgr._mgRoot;
    }
}
exports.MGBaseMgr = MGBaseMgr;
exports.default = MGBaseMgr;
