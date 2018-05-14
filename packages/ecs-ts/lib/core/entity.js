"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entity {
    constructor(...components) {
        this._uuid = 0;
        this._components = components;
    }
    getId() {
        return this._uuid;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get components() {
        return this._components;
    }
    add(component) {
        this.components.push(component);
        return component;
    }
    remove(component) {
        let index = this.components.indexOf(component);
        this.components.splice(index, 1);
    }
}
exports.default = Entity;
//# sourceMappingURL=entity.js.map