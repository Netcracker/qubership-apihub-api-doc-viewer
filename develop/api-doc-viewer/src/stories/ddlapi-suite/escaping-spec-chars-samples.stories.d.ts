import { DdlTableViewer } from '../../components/DdlTableViewer/DdlTableViewer';
import type { StoryObj } from "@storybook/react";
declare const meta: {
    id: string;
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/DdlTableViewer/DdlTableViewer').DdlTableViewerProps>;
};
export default meta;
type Story = StoryObj<typeof DdlTableViewer>;
export declare const DefaultValueBackslash: Story;
export declare const DefaultValueCr: Story;
export declare const DefaultValueCrlf: Story;
export declare const DefaultValueEmbeddedSingleQuotes: Story;
export declare const DefaultValueLf: Story;
export declare const DefaultValueQuoted: Story;
export declare const DefaultValueTab: Story;
export declare const DefaultValueUnicode: Story;
export declare const GeneratedExpressionComposite: Story;
export declare const GeneratedExpressionQuoted: Story;
