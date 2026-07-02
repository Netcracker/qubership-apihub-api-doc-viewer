import { DdlTableDiffsViewer } from '../../components/DdlTableViewer/DdlTableDiffsViewer';
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/DdlTableViewer/DdlTableDiffsViewer').DdlTableDiffsViewerProps>;
};
export default meta;
type Story = StoryObj<typeof DdlTableDiffsViewer>;
export declare const Case_01_wholly_added_table: Story;
export declare const Case_02_wholly_removed_table: Story;
export declare const Case_03_changed_schema_of_table: Story;
