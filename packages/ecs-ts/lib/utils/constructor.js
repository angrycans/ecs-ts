"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constructor;
(function (Constructor) {
    function getBaseClass(clazz) {
        let base = Object.getPrototypeOf(clazz);
        while (base.name) {
            clazz = base;
            base = Object.getPrototypeOf(clazz);
        }
        return clazz;
    }
    Constructor.getBaseClass = getBaseClass;
    function getFor(inst) {
        return Object.getPrototypeOf(inst).constructor;
    }
    Constructor.getFor = getFor;
})(Constructor = exports.Constructor || (exports.Constructor = {}));
//# sourceMappingURL=constructor.js.map