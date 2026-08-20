import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { type DebugTableKeyControls } from "../ddlapi-suite/resolve-debug-table-key";
export declare const DEFAULT_BEFORE_DDL = "CREATE SCHEMA IF NOT EXISTS public;\n\nCREATE TABLE public.t (\n  id integer\n);";
export declare const DEFAULT_AFTER_DDL = "CREATE SCHEMA IF NOT EXISTS public;\n\nCREATE TABLE public.t (\n  id integer,\n  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL\n);";
export type BuildFromDdlDiffsDebugProps = {
    beforeSql: string;
    afterSql: string;
    displayMode?: DisplayMode;
} & DebugTableKeyControls;
export declare const BuildFromDdlDiffsDebug: FC<BuildFromDdlDiffsDebugProps>;
