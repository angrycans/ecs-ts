import { Constructor } from "../utils/constructor";


export default class Component {
  constructor() {
    (this as any);
  }


  getComponentClass() {
    return Constructor.getFor(this);
  }


  is(clazz: Constructor<Component>): boolean {
    return Constructor.getFor(this) === clazz;
  }
}
