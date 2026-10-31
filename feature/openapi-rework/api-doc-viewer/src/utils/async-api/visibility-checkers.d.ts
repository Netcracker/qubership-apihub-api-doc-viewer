import { NodeDiffs } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DisplayMode } from '../../../../next-data-model/src/model/abstract/display-mode';
import { AsyncApiTextRowVisibility } from '../../../../next-data-model/src/model/async-api/node-visibility';
import { AsyncApiTreeNodeValueBase } from '../../../../next-data-model/src/model/async-api/types/node-value';
export declare function shouldBeDisplayed<V extends object = object>(value: V | null, diffs: NodeDiffs<V> | undefined, key: keyof V): boolean;
/**
 * Summary and description rows of an operation / message / channel / server: present when
 * `shouldBeDisplayed` (either diff side counts), hidden in `simple` display mode (annotations).
 */
export declare function resolveAsyncApiTextRowVisibility<V extends AsyncApiTreeNodeValueBase>(value: V | null, diffs: NodeDiffs<V> | undefined, displayMode: DisplayMode): AsyncApiTextRowVisibility;
