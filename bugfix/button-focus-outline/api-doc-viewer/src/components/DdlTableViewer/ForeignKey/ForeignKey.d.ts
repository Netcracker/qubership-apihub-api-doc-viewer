import { DdlApiForeignKeyTarget } from '../../../../../next-data-model/src/model/ddlapi/tree/node-value';
import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
type ForeignKeyProps = {
    target: DdlApiForeignKeyTarget;
    /** When true, only the navigation link is rendered (FK badge supplied by the caller). */
    hideBadge?: boolean;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
};
export declare const ForeignKey: FC<ForeignKeyProps>;
export {};
