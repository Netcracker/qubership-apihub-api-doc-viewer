import { Diff, DiffType } from "@netcracker/qubership-apihub-api-diff";
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { OpenApiExtensionKey } from '../../../../../next-data-model/src/shared/json-schema/types/extension-key';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaExtensionsSectionProps = {
    extensions: Record<OpenApiExtensionKey, unknown>;
    extensionsDiffs?: Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>;
    /** Background/badge for the `Extensions` row itself - set only when the owning node (the
     * property/root this `x-*` sub-tree is attached to) was wholly added/removed. See
     * `JsonSchemaKindAnyNodeDiffs.extensionsRowColorizingDiff` for scope. */
    extensionsRowColorizingDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare const JsonSchemaExtensionsSection: FC<JsonSchemaExtensionsSectionProps>;
