import { NodeDiffs } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
export declare function shouldBeDisplayed<V extends object = object>(value: V | null, diffs: NodeDiffs<V> | undefined, key: keyof V): boolean;
