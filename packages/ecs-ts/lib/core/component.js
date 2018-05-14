"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constructor_1 = require("../utils/constructor");
class Component {
    constructor() {
        this;
    }
    getComponentClass() {
        return constructor_1.Constructor.getFor(this);
    }
    is(clazz) {
        return constructor_1.Constructor.getFor(this) === clazz;
    }
}
exports.default = Component;
//# sourceMappingURL=component.js.map