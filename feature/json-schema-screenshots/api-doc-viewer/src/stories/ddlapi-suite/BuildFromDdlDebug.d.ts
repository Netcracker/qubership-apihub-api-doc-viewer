import { FC } from '../../../../../node_modules/react';
import { type DebugTableKeyControls } from "./resolve-debug-table-key";
export declare const DEFAULT_DDL = "CREATE TABLE users (\n  id bigint PRIMARY KEY,\n  email varchar(255) NOT NULL,\n  created_at timestamp DEFAULT now()\n);";
export type BuildFromDdlDebugProps = {
    ddlText: string;
} & DebugTableKeyControls;
export declare const BuildFromDdlDebug: FC<BuildFromDdlDebugProps>;
