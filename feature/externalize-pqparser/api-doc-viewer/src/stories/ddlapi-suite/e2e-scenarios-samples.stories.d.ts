import type { StoryObj } from "@storybook/react";
import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/DdlTableViewer/DdlTableViewer').DdlTableViewerProps>;
};
export default meta;
type Story = StoryObj<typeof DdlTableViewer>;
export declare const Users: Story;
export declare const Employees: Story;
export declare const Projects: Story;
export declare const EmployeesProjects: Story;
export declare const UsersPlusIdx: Story;
export declare const Petstore: Story;
