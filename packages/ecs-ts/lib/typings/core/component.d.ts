import { Constructor } from "../utils/constructor";
export default class Component {
    constructor();
    getComponentClass(): Constructor<{}>;
    is(clazz: Constructor<Component>): boolean;
}
