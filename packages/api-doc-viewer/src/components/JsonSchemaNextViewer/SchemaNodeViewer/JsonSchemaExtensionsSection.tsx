import { JsoViewer } from "@apihub/components/JsoViewer/JsoViewer"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { PrecededBy } from "@apihub/components/shared-components/WithPrecededByProps"
import { OpenApiExtensionKey } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/types/extension-key"
import { FC } from "react"

export type JsonSchemaExtensionsSectionProps = {
  extensions: Record<OpenApiExtensionKey, unknown>
}

export const JsonSchemaExtensionsSection: FC<JsonSchemaExtensionsSectionProps> = (props) => {
  const { extensions } = props
  const level = useLevelContext()
  const nestedLevel = level + 1

  return (
    <LevelContext.Provider value={nestedLevel}>
      <div className="flex flex-col">
        <NestingIndicatorTitleRow
          data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
          title="Extensions"
          usage={NestingIndicatorTitleRowUsage.JsonSchema}
          lastInvisible
        />
        <JsoViewer
          source={extensions}
          initialLevel={nestedLevel}
        />
      </div>
    </LevelContext.Provider>
  )
}
