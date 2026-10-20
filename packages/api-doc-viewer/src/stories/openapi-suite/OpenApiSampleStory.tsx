import { OpenApiOperationViewer } from "@apihub/components/OpenApiOperationViewer/OpenApiOperationViewer";
import { DisplayMode } from "@apihub/types/DisplayMode";
import { useMemo } from "react";
import { prepareOpenApiDocument } from "../preprocess";
import { parseYamlSource } from "../utils/parse-yaml-source";

export type OpenApiSampleStoryProps = {
  caseId: string;
  sampleYaml: string;
  path: string;
  method: string;
  displayMode?: DisplayMode;
  noHeading?: boolean;
  /** Selector options the case covers (security alternative, response code, media type), in order. */
  switchTo?: readonly string[];
  /** Select `switchTo` on mount (story `play`); off = the viewer's initial selection. */
  autoSwitch?: boolean;
};

export const OpenApiSampleStory = ({ sampleYaml, path, method, displayMode, noHeading }: OpenApiSampleStoryProps) => {
  const source = useMemo(() => prepareOpenApiDocument(parseYamlSource(sampleYaml)), [sampleYaml]);
  return (
    <OpenApiOperationViewer
      source={source}
      operationKeys={{ path, method }}
      displayMode={displayMode}
      noHeading={noHeading}
      devMode={true}
    />
  );
};
