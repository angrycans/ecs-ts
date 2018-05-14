import Component from './component';
declare abstract class System<T extends Component> {
    private components;
    register(component: T): void;
    deregister(component: T): void;
    update(deltaTime: number): void;
    protected abstract next(component: T, deltaTime: number): void;
}
export default System;
