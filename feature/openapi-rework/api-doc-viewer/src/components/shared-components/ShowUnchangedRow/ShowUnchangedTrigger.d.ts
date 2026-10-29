import { FC } from '../../../../../../node_modules/react';
import { NodeId } from '../../../../../next-data-model/src/utility-types';
export type ShowUnchangedTriggerProps = {
    unchangedBlockId: NodeId;
    /** Tooltip and accessible name (`Show 3 unchanged nodes`, `Show 4 unchanged rows`). */
    label: string;
    onReveal: (unchangedBlockId: NodeId) => void;
};
/**
 * The "three dots" button that reveals one block of unchanged content: an icon button styled by the
 * shared config (shared-styles/colors/icon-buttons.css), like the scroll-strip arrows. Rows place it: the JSON
 * Schema children list in `ShowUnchangedRowContent`, a security scheme card in its own card row.
 */
export declare const ShowUnchangedTrigger: FC<ShowUnchangedTriggerProps>;
