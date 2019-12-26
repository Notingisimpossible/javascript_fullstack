declare let notSure: any;
declare let value: any;
declare let val: unknown;
declare function error(message: string): never;
declare const empty: never[];
declare const list: number[];
declare const list1: any[];
declare const list2: Array<number>;
declare const list3: Array<string | number>;
declare let x: [string, number, boolean];
interface Tuple extends Array<string | number> {
    0: string;
    1: number;
    length: 2;
}
declare enum Direction {
    center = 1
}
declare let values: object;
