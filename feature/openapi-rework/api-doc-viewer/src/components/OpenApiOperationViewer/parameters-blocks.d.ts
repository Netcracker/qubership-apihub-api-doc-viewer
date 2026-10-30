import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
import { ParametersNode } from './ParametersNodeViewer';
type ParametersNodeViewerProps = {
    node: ParametersNode;
    title: string;
    testId: string;
};
/**
 * A parameter group / response Headers as a layout block: a collapsible section - its h3 title row
 * with the expander, then (expanded) the synthesized object schema (a nested viewer) when there is
 * one. Design: entities/parameters.md, features/collapsible-sections.md.
 */
export declare function buildParametersBlock(id: string, props: ParametersNodeViewerProps, view: OpenApiViewState): StackBlock;
export {};
