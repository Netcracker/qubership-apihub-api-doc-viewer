import { JsoViewer } from "@apihub/components/JsoViewer/JsoViewer"
import { NestingIndicatorTitle } from "@apihub/components/common/NestingIndicatorTitle"
import { LevelIndicator } from "@apihub/components/shared-components/LevelIndicator"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { OpenApiExtensionKey } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/types/extension-key"
import { FC } from "react"

export type JsonSchemaExtensionsSectionProps = {
  extensions: Record<OpenApiExtensionKey, unknown>
}

export const JsonSchemaExtensionsSection: FC<JsonSchemaExtensionsSectionProps> = (props) => {
  const { extensions } = props
  const level = useLevelContext()

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <LevelIndicator level={level + 1} lastInvisible />
        <NestingIndicatorTitle>
          Extensions
        </NestingIndicatorTitle>
      </div>
      <JsoViewer
        source={extensions}
        initialLevel={level + 1}
      />
    </div>
  )
}
