import {
  DdlApiColumnRowValue,
  DdlApiIndexRowValue,
  DdlApiSectionHeaderRowValue,
  DdlApiTableRowValue,
} from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { TableKey } from "@apihub/next-data-model/shared/ddlapi/types/table-key";
import { isObject } from "../../../utilities";
import {
  DDL_API_COLUMNS_SECTION_TITLE,
  DDL_API_INDEXES_SECTION_TITLE,
} from "../json-crawl-entities/transformers/constants/constants";
import { DdlApiLogger } from "../logging";

export interface DdlApiTableOrientedSpecColumnsSection extends DdlApiSectionHeaderRowValue {
  readonly items: readonly DdlApiColumnRowValue[];
}

export interface DdlApiTableOrientedSpecIndexesSection extends DdlApiSectionHeaderRowValue {
  readonly items: readonly DdlApiIndexRowValue[];
}

/** Crawl-ready table document produced from a normalized or merged DDL source. */
export interface DdlApiTableOrientedSpec extends DdlApiTableRowValue {
  readonly columns: DdlApiTableOrientedSpecColumnsSection;
  readonly indexes: DdlApiTableOrientedSpecIndexesSection;
}

export class DdlApiSpecTransformer {
  constructor(
    protected readonly logger: DdlApiLogger,
  ) { }

  public transformSourceToTableOrientedSpec(
    source: unknown,
    tableKey: TableKey,
  ): DdlApiTableOrientedSpec | null {
    if (this.isDdlApiTableOrientedSpec(source)) {
      return source
    }

    // TODO: map normalized Realm / merged document + tableKey to DdlApiTableOrientedSpec
    this.logger.debug('[DDL API] Unsupported source shape for table key:', tableKey, source)
    return null
  }

  protected isDdlApiTableOrientedSpec(value: unknown): value is DdlApiTableOrientedSpec {
    if (!isObject(value)) {
      return false
    }
    if (typeof value.tableName !== 'string') {
      return false
    }
    if (!isObject(value.columns) || !Array.isArray(value.columns.items)) {
      return false
    }
    if (!isObject(value.indexes) || !Array.isArray(value.indexes.items)) {
      return false
    }
    return true
  }

  protected createEmptyTableOrientedSpec(tableKey: TableKey): DdlApiTableOrientedSpec {
    return {
      tableName: tableKey.name,
      schemaName: tableKey.schemaName,
      columns: {
        title: DDL_API_COLUMNS_SECTION_TITLE,
        items: [],
      },
      indexes: {
        title: DDL_API_INDEXES_SECTION_TITLE,
        items: [],
      },
    }
  }
}
