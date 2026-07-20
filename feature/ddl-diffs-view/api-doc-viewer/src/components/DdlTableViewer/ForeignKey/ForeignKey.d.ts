import { DdlApiForeignKeyTarget } from '../../../../../next-data-model/src/model/ddlapi/tree/node-value';
import { FC } from '../../../../../../node_modules/react';
type ForeignKeyProps = {
    target: DdlApiForeignKeyTarget;
    /** When true, only the navigation link is rendered (FK badge supplied by the caller). */
    hideBadge?: boolean;
};
export declare const ForeignKey: FC<ForeignKeyProps>;
export {};
