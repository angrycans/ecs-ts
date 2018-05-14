export interface Constructor<T> {
    new (...p: any[]): T;
    name?: string;
}
export declare namespace Constructor {
    function getBaseClass(clazz: Constructor<{}>): Constructor<{}>;
    function getFor(inst: {}): Constructor<{}>;
}
