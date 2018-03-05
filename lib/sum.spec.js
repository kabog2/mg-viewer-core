(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_1 = require("./index");
    describe("sum", () => {
        it("sums two numbers", () => {
            expect(index_1.sum(1, 2)).toEqual(3);
        });
    });
});
//# sourceMappingURL=sum.spec.js.map