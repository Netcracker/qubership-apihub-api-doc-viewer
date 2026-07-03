import type { StoryObj } from "@storybook/react";
import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/DdlTableViewer/DdlTableViewer').DdlTableViewerProps>;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof DdlTableViewer>;
export declare const BugForeignKey: Story;
