import { SpecificationExtensionKey } from "@netcracker/qubership-apihub-next-data-model/model/specification-extension-key"
import { JsoViewer } from "../JsoViewer/JsoViewer"
import { TitleRow } from "./TitleRow"
import { FC, useMemo } from "react"
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"

type SpecificationExtensionsProps = {
  values: Record<SpecificationExtensionKey, unknown>
  kind: AsyncApiTreeNodeKind
}

// TODO: Make it row-like component
export const SpecificationExtensions: FC<SpecificationExtensionsProps> = (props) => {
  const { values, kind } = props

  const variant = useMemo(() => {
    switch (kind) {
      case AsyncApiTreeNodeKinds.BINDING:
        return 'h4'
      default:
        return 'h3'
    }
  }, [kind])

  return <>
    <TitleRow
      value='Extensions'
      expandable={false}
      variant={variant}
    />
    <JsoViewer
      source={values}
      initialLevel={1}
    />
  </>
}