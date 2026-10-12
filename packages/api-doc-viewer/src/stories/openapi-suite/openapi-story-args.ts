import { DETAILED_DISPLAY_MODE, DisplayMode, SIMPLE_DISPLAY_MODE } from "@apihub/types/DisplayMode";
import { switchOpenApiOptions } from "@apihub/utils/openapi/switch-openapi-options";

const DISPLAY_MODES: readonly DisplayMode[] = [DETAILED_DISPLAY_MODE, SIMPLE_DISPLAY_MODE];

/**
 * Story controls shared by the OpenAPI suites: one story per case, the display mode is a control
 * (ITs pass `displayMode` as a story arg) - never a duplicated story.
 */
export const OPENAPI_STORY_ARG_TYPES = {
  displayMode: {
    control: { type: "select" },
    options: DISPLAY_MODES,
    table: { category: "Viewer" },
  },
} as const;

export const OPENAPI_STORY_DEFAULT_ARGS: { displayMode: DisplayMode } = {
  displayMode: DETAILED_DISPLAY_MODE,
};

/** Plain suite: display mode plus the auto-switch toggle. */
export const OPENAPI_PLAIN_STORY_ARG_TYPES = {
  ...OPENAPI_STORY_ARG_TYPES,
  autoSwitch: {
    control: { type: "boolean" },
    description: "Select the options the case covers (`switchTo`) on mount.",
    table: { category: "Case" },
  },
  noHeading: {
    control: { type: "boolean" },
    table: { category: "Viewer" },
  },
} as const;

export const OPENAPI_PLAIN_STORY_DEFAULT_ARGS: { displayMode: DisplayMode; autoSwitch: boolean; noHeading: boolean } = {
  ...OPENAPI_STORY_DEFAULT_ARGS,
  autoSwitch: true,
  noHeading: false,
};

/**
 * Story `play`: selects the case's `switchTo` options (the same `switchOpenApiOptions` the ITs run
 * through `page.evaluate`, mirroring `switchCombinerNodesToChangedVariant`).
 */
export const playOpenApiAutoSwitch = async (context: {
  canvasElement: HTMLElement;
  args: { switchTo?: readonly string[]; autoSwitch?: boolean };
}): Promise<void> => {
  const { canvasElement, args } = context;
  if (args.autoSwitch !== false && args.switchTo && args.switchTo.length > 0) {
    await switchOpenApiOptions(args.switchTo, canvasElement);
  }
};
