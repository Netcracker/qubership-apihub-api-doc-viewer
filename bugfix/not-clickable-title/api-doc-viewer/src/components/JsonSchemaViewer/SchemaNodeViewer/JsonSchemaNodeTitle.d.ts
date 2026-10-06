import { LayoutSide } from '../../../types/internal/LayoutSide';
import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { JsonSchemaNodeTitleDisplay } from '../utils/resolve-json-schema-node-title';
export type JsonSchemaNodeTitleProps = {
    display: JsonSchemaNodeTitleDisplay;
    required?: boolean;
    requiredDiff?: Diff;
    layoutSide?: LayoutSide;
    /** Diff of the title text itself (e.g. a renamed property key), highlighted on `layoutSide`. */
    textDiff?: ChangedPropertyMetaData;
    /** Makes the title clickable (e.g. toggles the row's expander); omit for a non-interactive title. */
    onClick?: () => void;
};
export type JsonSchemaNodeTitlePlainProps = Omit<JsonSchemaNodeTitleProps, "requiredDiff" | "layoutSide" | "textDiff">;
export declare const JsonSchemaNodeTitlePlain: FC<JsonSchemaNodeTitlePlainProps>;
export declare const JsonSchemaNodeTitleWithDiffs: FC<JsonSchemaNodeTitleProps>;
