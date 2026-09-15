import { LayoutSide } from '../../../types/internal/LayoutSide';
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../../node_modules/react';
import { JsonSchemaNodeTitleDisplay } from "../utils/resolve-json-schema-node-title";
export type JsonSchemaNodeTitleProps = {
    display: JsonSchemaNodeTitleDisplay;
    required?: boolean;
    requiredDiff?: Diff;
    layoutSide?: LayoutSide;
};
export type JsonSchemaNodeTitlePlainProps = Omit<JsonSchemaNodeTitleProps, "requiredDiff" | "layoutSide">;
export declare const JsonSchemaNodeTitlePlain: FC<JsonSchemaNodeTitlePlainProps>;
export declare const JsonSchemaNodeTitleWithDiffs: FC<JsonSchemaNodeTitleProps>;
/** @deprecated Use {@link JsonSchemaNodeTitlePlain} or {@link JsonSchemaNodeTitleWithDiffs}. */
export declare const JsonSchemaNodeTitle: FC<JsonSchemaNodeTitleProps>;
