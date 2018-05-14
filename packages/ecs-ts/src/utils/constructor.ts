
export interface Constructor<T> {

  new(...p: any[]): T;

  name?: string;

}

export namespace Constructor {

  export function getBaseClass(clazz: Constructor<{}>): Constructor<{}> {
    let base = Object.getPrototypeOf(clazz);
    while (base.name) {
      clazz = base;
      base = Object.getPrototypeOf(clazz);
    }
    return clazz;
  }


  export function getFor(inst: {}): Constructor<{}> {
    return Object.getPrototypeOf(inst).constructor;
  }
}
