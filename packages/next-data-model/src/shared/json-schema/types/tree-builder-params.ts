import { BuildingServiceLogger } from "@apihub/next-data-model/loggers"

export type JsonSchemaTreeBuilderParams = {
  source: unknown
  /** When set, simple nodes at this data depth defer children until materializeChildren(). */
  materializeDepth?: number
  logger?: BuildingServiceLogger
}
