import { IModelStatePropNode } from '../../../../api-state-model/src';
export declare function hasChildren(stateNode?: IModelStatePropNode<any>): boolean;
export declare function hasAnnotationsOrValidations(kind: 'openapi' | 'graphapi', stateNode?: IModelStatePropNode<any>): boolean;
