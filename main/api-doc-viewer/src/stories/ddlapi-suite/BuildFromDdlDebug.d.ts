import { FC } from '../../../../../node_modules/react';
export declare const DEFAULT_DDL = "CREATE TABLE users (\n  id bigint PRIMARY KEY,\n  email varchar(255) NOT NULL,\n  created_at timestamp DEFAULT now()\n);";
export type BuildFromDdlDebugProps = {
    ddlText: string;
};
export declare const BuildFromDdlDebug: FC<BuildFromDdlDebugProps>;
