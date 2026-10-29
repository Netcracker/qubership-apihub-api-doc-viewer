import { Meta, StoryObj } from '@storybook/react-vite';
import { OpenApiCompatibilitySuiteStoryArgs } from '../utils/compatibility-suite-utils';
declare const meta: Meta<OpenApiCompatibilitySuiteStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AddOverridenDescription: Story;
