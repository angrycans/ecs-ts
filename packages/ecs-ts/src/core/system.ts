import Component from './component';

abstract class System<T extends Component> {
  private components: T[] = [];

  public register(component: T) {
    this.components.push(component);
  }

  public deregister(component: T) {
    // mutating the array for performance
    this.components.splice(this.components.indexOf(component));
  }

  public update(deltaTime: number): void {
    for (const component of this.components) {
      this.next(component, deltaTime);
    }
  }

  protected abstract next(component: T, deltaTime: number): void;
}

export default System;