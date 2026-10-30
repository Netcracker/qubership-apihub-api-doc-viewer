import { LayoutSeparatorRow } from '../../../../../next-data-model/src/model/abstract/layout';
import { ReactElement } from '../../../../../../node_modules/react';
import { SeparatorFramePositions } from './SeparatorRow';
/**
 * The separator row element for `separator` with these frame positions - the same element object
 * every time, so React skips it on re-render. Context (layout mode) still reaches it: the memoised
 * component re-renders only when the context it reads changes.
 */
export declare function renderSeparatorRow(separator: LayoutSeparatorRow, framePositions?: SeparatorFramePositions): ReactElement;
