import { AsyncApiOperationViewer } from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer";
import { DETAILED_DISPLAY_MODE, DisplayMode, SIMPLE_DISPLAY_MODE } from "@apihub/types/DisplayMode";
import { FC, useMemo } from "react";
import { prepareAsyncApiDocument } from "../preprocess";
import { parseYamlSource } from "../utils/parse-yaml-source";
import { TEST_REFERENCE_NAME_PROPERTY } from "./shared-test-data";

/** Operation / message every AsyncAPI Security fixture declares. */
export const ASYNC_API_SECURITY_OPERATION_KEYS = { operationKey: "sendOperation", messageKey: "TestMessage" } as const;

const DISPLAY_MODES: readonly DisplayMode[] = [DETAILED_DISPLAY_MODE, SIMPLE_DISPLAY_MODE];

/** Story controls of the AsyncAPI Security suites: the display mode (ITs pass it as a story arg). */
export const ASYNC_API_SECURITY_STORY_ARG_TYPES = {
  displayMode: {
    control: { type: "select" },
    options: DISPLAY_MODES,
    table: { category: "Viewer" },
  },
} as const;

export const ASYNC_API_SECURITY_STORY_DEFAULT_ARGS: { displayMode: DisplayMode } = {
  displayMode: DETAILED_DISPLAY_MODE,
};

export type AsyncApiSecuritySampleStoryProps = {
  caseId: string;
  yaml: string;
  displayMode?: DisplayMode;
};

/** One plain AsyncAPI Security fixture (`packages/samples/async-api/security/<case>/document.yaml`). */
export const AsyncApiSecuritySampleStory: FC<AsyncApiSecuritySampleStoryProps> = ({ yaml, displayMode = DETAILED_DISPLAY_MODE }) => {
  const source = useMemo(() => prepareAsyncApiDocument({ source: parseYamlSource(yaml) }), [yaml]);
  return (
    <AsyncApiOperationViewer
      devMode={true}
      source={source}
      operationKeys={ASYNC_API_SECURITY_OPERATION_KEYS}
      referenceNamePropertyKey={TEST_REFERENCE_NAME_PROPERTY}
      displayMode={displayMode}
    />
  );
};
