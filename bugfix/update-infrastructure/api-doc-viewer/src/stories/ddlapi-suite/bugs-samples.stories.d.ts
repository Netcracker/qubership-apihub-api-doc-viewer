import { StoryObj } from '@storybook/react-vite';
import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../..').DdlTableViewerProps>;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof DdlTableViewer>;
export declare const BugForeignKey: Story;
