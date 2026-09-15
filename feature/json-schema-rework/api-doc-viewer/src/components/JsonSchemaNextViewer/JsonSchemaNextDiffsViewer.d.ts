import { CustomizationOptions } from '../../contexts/CustomizationOptionsContext';
import { DiffMetaKeys } from '../../types/DiffMetaKeys';
import { DisplayMode } from '../../types/DisplayMode';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../node_modules/react';
export type JsonSchemaNextDiffsViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    devMode?: boolean;
    initialLevel?: number;
    customizationOptions?: CustomizationOptions;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
    /**
     * Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses
     * runs of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.
     * Modeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third
     * mode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see
     * refactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.
     */
    hideUnchangedNodes?: boolean;
};
export declare const JsonSchemaNextDiffsViewer: FC<JsonSchemaNextDiffsViewerProps>;
