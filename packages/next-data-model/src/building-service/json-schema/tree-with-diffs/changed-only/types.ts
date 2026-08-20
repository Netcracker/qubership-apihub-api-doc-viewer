import { DiffType } from "@netcracker/qubership-apihub-api-diff"

export type JsonSchemaNodeChangedOptions = {
  /** When set, a signal counts only if its DiffType is in this set. */
  diffTypes?: ReadonlySet<DiffType>
}
