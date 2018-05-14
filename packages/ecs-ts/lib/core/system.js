"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class System {
    constructor() {
        this.components = [];
    }
    register(component) {
        this.components.push(component);
    }
    deregister(component) {
        // mutating the array for performance
        this.components.splice(this.components.indexOf(component));
    }
    update(deltaTime) {
        for (const component of this.components) {
            this.next(component, deltaTime);
        }
    }
}
exports.default = System;
//# sourceMappingURL=system.js.map