import type { Meta, StoryObj } from "@storybook/react";
import {
  DEBUG_TABLE_KEY_ARG_TYPES,
  DEBUG_TABLE_KEY_DEFAULT_ARGS,
} from "./debug-table-key-story-args";
import { BuildFromDdlDebug, DEFAULT_DDL } from "./BuildFromDdlDebug";

const meta = {
  title: "Debug/DDL API from DDL SQL",
  component: BuildFromDdlDebug,
  argTypes: {
    ddlText: {
      control: "text",
    },
    ...DEBUG_TABLE_KEY_ARG_TYPES,
  },
  args: {
    ddlText: DEFAULT_DDL,
    ...DEBUG_TABLE_KEY_DEFAULT_ARGS,
    tableName: "users",
  },
} satisfies Meta<typeof BuildFromDdlDebug>;

export default meta;

type Story = StoryObj<typeof BuildFromDdlDebug>;

export const Debug: Story = {};
