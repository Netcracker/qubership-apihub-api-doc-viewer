import { FC } from '../../../../../node_modules/react';
import { GraphApiDiffSchemaOptions } from '../preprocess';
import { GraphQLOperationDiffViewerProps } from '../../components/GraphQLOperationViewer/GraphQLOperationDiffViewer';
type TestGraphQLOperationDiffViewerProps = Omit<GraphQLOperationDiffViewerProps, 'source'> & GraphApiDiffSchemaOptions;
export declare const TestGraphQLOperationDiffViewer: FC<TestGraphQLOperationDiffViewerProps>;
export {};
