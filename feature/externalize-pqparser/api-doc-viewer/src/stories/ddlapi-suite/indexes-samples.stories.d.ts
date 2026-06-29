import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
import type { StoryObj } from "@storybook/react";
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/DdlTableViewer/DdlTableViewer').DdlTableViewerProps>;
};
export default meta;
type Story = StoryObj<typeof DdlTableViewer>;
export declare const CoveringInclude: Story;
export declare const Expression: Story;
export declare const NullsNotDistinct: Story;
export declare const OneColumn: Story;
export declare const OneColumnUnique: Story;
export declare const Partial: Story;
export declare const TwoColumns: Story;
export declare const TwoColumnsUnique: Story;
