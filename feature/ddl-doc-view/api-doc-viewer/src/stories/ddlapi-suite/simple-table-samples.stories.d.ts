import type { StoryObj } from "@storybook/react";
import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/DdlTableViewer/DdlTableViewer').DdlTableViewerProps>;
};
export default meta;
type Story = StoryObj<typeof DdlTableViewer>;
export declare const PrimaryKeyAndDefaults: Story;
export declare const ForeignKeys: Story;
export declare const EnumColumn: Story;
