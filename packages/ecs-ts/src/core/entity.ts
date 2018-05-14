import Component from './component';
import { Constructor } from "../utils/Constructor";

class Entity {
  private _uuid: number = 0;
  private _isActive: boolean;
  private _components: Component[];

  constructor(...components: Component[]) {
    this._components = components;
  }

  public getId(): number {
    return this._uuid;
  }

  get isActive() {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get components() {
    return this._components;
  }

  public add<T extends Component>(component: T): T {
    this.components.push(component);
    return component;
  }

  public remove<T extends Component>(component: T): void {
    let index = this.components.indexOf(component);
    this.components.splice(index, 1);
  }



}

export default Entity;