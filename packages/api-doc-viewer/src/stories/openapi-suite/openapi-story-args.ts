import { DETAILED_DISPLAY_MODE, DisplayMode, SIMPLE_DISPLAY_MODE } from "@apihub/types/DisplayMode";

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
