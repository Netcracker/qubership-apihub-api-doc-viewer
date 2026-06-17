import type { Realm } from "@netcracker/qubership-apihub-ddlapi";
import type { Meta, StoryObj } from "@storybook/react";
import { DdlTableViewer } from "@apihub/components/DdlTableViewer/DdlTableViewer";
import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-callback";
import { buildFromDdlInBrowser } from "./build-from-ddl-browser";

type LoaderData = {
  realm: Realm;
};

const SIMPLE_TABLE_DDL = `CREATE TABLE items (
  id bigint PRIMARY KEY,
  sku varchar(64) NOT NULL UNIQUE,
  quantity integer NOT NULL DEFAULT 0
);`;

const FOREIGN_KEY_DDL = `CREATE TABLE departments (
  id bigint PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE employees (
  id bigint PRIMARY KEY,
  department_id bigint REFERENCES departments (id) ON DELETE CASCADE,
  full_name text NOT NULL
);`;

const ENUM_TABLE_DDL = `CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

CREATE TABLE diary (
  id bigint PRIMARY KEY,
  entry_date date NOT NULL,
  mood mood NOT NULL
);`;

async function loadRealm(ddl: string): Promise<LoaderData> {
  return { realm: await buildFromDdlInBrowser(ddl) };
}

const navigationCallback: NavigationCallback = (schema, table, column) => {
  console.log(`Navigating to ${schema}.${table}.${column}`);
};

const meta = {
  title: "DDL API Suite/Simple Table",
  component: DdlTableViewer,
} satisfies Meta<typeof DdlTableViewer>;

export default meta;

type Story = StoryObj<typeof DdlTableViewer>;

export const PrimaryKeyAndDefaults: Story = {
  loaders: [() => loadRealm(SIMPLE_TABLE_DDL)],
  render: (_args, { loaded }) => (
    <DdlTableViewer
      source={loaded!.realm}
      tableKey={{ schemaName: "public", name: "items" }}
      navigationCallback={navigationCallback}
    />
  ),
};

export const ForeignKeys: Story = {
  loaders: [() => loadRealm(FOREIGN_KEY_DDL)],
  render: (_args, { loaded }) => (
    <DdlTableViewer
      source={loaded!.realm}
      tableKey={{ schemaName: "public", name: "employees" }}
      navigationCallback={navigationCallback}
    />
  ),
};

export const EnumColumn: Story = {
  loaders: [() => loadRealm(ENUM_TABLE_DDL)],
  render: (_args, { loaded }) => (
    <DdlTableViewer
      source={loaded!.realm}
      tableKey={{ schemaName: "public", name: "diary" }}
      navigationCallback={navigationCallback}
    />
  ),
};
