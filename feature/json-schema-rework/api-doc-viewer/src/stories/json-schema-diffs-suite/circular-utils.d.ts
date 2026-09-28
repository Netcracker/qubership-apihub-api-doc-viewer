import { type JsonSchemaDiffCaseStoryComponentProps } from './json-schema-diffs-utils';
/**
 * Same as JsonSchemaDiffSamplesStory (json-schema-diffs-utils.tsx), but reads the circular fixture
 * shape above and runs the merge with `circular: true`. Story/case factories, arg types and meta
 * keys are shared with the other JSON Schema Diffs Suite stories.
 */
export declare const JsonSchemaCircularDiffSamplesStory: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
