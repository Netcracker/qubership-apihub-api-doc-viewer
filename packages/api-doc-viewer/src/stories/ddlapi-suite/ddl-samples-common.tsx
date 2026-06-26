import { DdlTableViewer } from "@apihub/components/DdlTableViewer/DdlTableViewer";
import type { DisplayMode } from "@apihub/types/DisplayMode";
import type { Realm } from "@netcracker/qubership-apihub-ddlapi";
import type { StoryObj } from "@storybook/react";
import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-callback";
import type { DdlSampleCase } from "../utils/ddl-samples-cases";
import { buildFromDdlInBrowser } from "./build-from-ddl-browser";

type LoaderData = {
  realm: Realm;
};

const navigationCallback: NavigationCallback = (schema, table, column) => {
  console.log(`Navigating to ${schema}.${table}.${column}`);
};

export type DdlSamplesStoryObj = StoryObj<typeof DdlTableViewer>;

export type DdlCaseStoryFactoryOptions = {
  displayMode?: DisplayMode;
};

async function loadRealm(ddl: string): Promise<LoaderData> {
  return { realm: await buildFromDdlInBrowser(ddl) };
}

export const createCaseStoryFactory = (
  sampleById: Record<string, DdlSampleCase>,
  options?: DdlCaseStoryFactoryOptions,
) => {
  const { displayMode: factoryDisplayMode } = options ?? {};

  return (caseId: string): DdlSamplesStoryObj => {
    const sample = sampleById[caseId];
    if (!sample) {
      throw new Error(`Sample case not found: ${caseId}`);
    }

    return {
      name: caseId,
      ...(factoryDisplayMode !== undefined
        ? { args: { displayMode: factoryDisplayMode } }
        : {}),
      loaders: [() => loadRealm(sample.ddl)],
      render: (args, { loaded }) => (
        <DdlTableViewer
          source={loaded!.realm}
          tableKey={sample.tableKey}
          navigationCallback={navigationCallback}
          displayMode={args.displayMode ?? factoryDisplayMode}
          devMode
        />
      ),
    };
  };
};
