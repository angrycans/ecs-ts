import Component from './component';
declare class Entity {
    private _uuid;
    private _isActive;
    private _components;
    constructor(...components: Component[]);
    getId(): number;
    isActive: boolean;
    readonly components: Component[];
    add<T extends Component>(component: T): T;
    remove<T extends Component>(component: T): void;
}
export default Entity;
