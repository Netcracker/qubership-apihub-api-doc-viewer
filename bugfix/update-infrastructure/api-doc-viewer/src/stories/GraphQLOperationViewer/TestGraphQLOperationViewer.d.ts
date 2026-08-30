import { FC } from '../../../../../node_modules/react';
import { GraphQLOperationViewerProps } from '../../components/GraphQLOperationViewer/GraphQLOperationViewer';
import { GraphApiSchemaOptions } from '../preprocess';
type TestGraphQLOperationViewerProps = Omit<GraphQLOperationViewerProps, 'source'> & GraphApiSchemaOptions;
export declare const TestGraphQLOperationViewer: FC<TestGraphQLOperationViewerProps>;
export {};
