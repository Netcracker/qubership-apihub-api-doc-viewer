import { Level } from "@adv/shared/components/elements/Level";
import { printValue } from "@adv/shared/utilities/render-unknown";
import { ADV, isMultipleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo, useCallback } from "react";
import { AppliedDirective } from "../elements/AppliedDirective";
import { Arguments } from "../elements/Arguments";
import { DirectiveLocations } from "../elements/DirectiveLocations";
import { OutputType } from "../elements/OutputType";

type HeaderRowProps = {
  row: ADV.Row
  expanded?: boolean
  onToggle: (row: ADV.Row) => void
}

// eslint-disable-next-line
export const HeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  // eslint-disable-next-line
  const onToggleClick = useCallback(() => { onToggle(row) }, [onToggle, row])

  switch (row.type) {
    case ADV.RowType.GRAPHQL_OPERATION_HEADER_ROW:
      return <OperationHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.GRAPHQL_METHOD_HEADER_ROW:
      return <MethodHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.GRAPHQL_OPERATION_ARGUMENTS_HEADER_ROW:
      return <OperationArgumentsHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.GRAPHQL_OPERATION_OUTPUT_HEADER_ROW:
      return <OperationOutputHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.GRAPHQL_METHOD_ARGUMENTS_HEADER_ROW:
      return <MethodArgumentsHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.GRAPHQL_METHOD_OUTPUT_HEADER_ROW:
      return <MethodOutputHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.GRAPHQL_DIRECTIVE_HEADER_ROW:
      return <DirectiveHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    case ADV.RowType.HEADER_ROW:
      return <GeneralHeaderRow row={row} expanded={expanded} onToggle={onToggle} />
    default:
      return <span style={{ color: 'red' }}>Unsupported header row: {row.type}</span>
  }
})

export const OperationHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            switch (element.kind) {
              case ADV.MultipleElementKind.GRAPHQL_OPERATION_ARGUMENTS:
                return <Arguments key={`arguments-${index}`} element={element} />
              case ADV.MultipleElementKind.GRAPHQL_OPERATION_OUTPUT:
                return <OutputType key={`output-${index}`} element={element} />
            }
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.OPERATION_NODE_TITLE_BADGE: {
              const value = element.afterValue as string
              let bgColor = 'gray'
              let textColor = 'white'
              switch (value) {
                case 'query':
                  bgColor = '#00BB5B'
                  textColor = 'white'
                  break
                case 'mutation':
                  bgColor = '#38BDF8'
                  textColor = 'white'
                  break
                case 'subscription':
                  bgColor = '#F59E0B'
                  textColor = 'white'
                  break
              }
              return (
                <div
                  key={`operation-${value}-${index}`}
                  style={{
                    textTransform: 'uppercase',
                    marginRight: '10px',
                    borderRadius: '5px',
                    padding: '0 5px',
                    backgroundColor: bgColor,
                    color: textColor,
                  }}>
                  {value}
                </div>
              )
            }
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontFamily: 'Inter Medium', fontWeight: 400, marginRight: '10px' }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TITLE_BADGE:
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#D6EDFF',
                    color: '#004EAE',
                    borderRadius: '5px',
                    padding: '0 5px',
                    marginRight: '10px',
                  }}
                >
                  {printValue(element.afterValue)}
                </div>
              )
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

export const MethodHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            switch (element.kind) {
              case ADV.MultipleElementKind.GRAPHQL_OPERATION_ARGUMENTS:
                return <Arguments key={`arguments-${index}`} element={element} />
              case ADV.MultipleElementKind.GRAPHQL_OPERATION_OUTPUT:
                return <OutputType key={`output-${index}`} element={element} bold={false} />
            }
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontFamily: 'Inter Medium', fontWeight: 400, marginRight: '10px' }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TITLE_BADGE:
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#D6EDFF',
                    color: '#004EAE',
                    borderRadius: '5px',
                    padding: '0 5px',
                    marginRight: '10px',
                  }}
                >
                  {printValue(element.afterValue)}
                </div>
              )
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

export const OperationArgumentsHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontFamily: 'Inter Medium', fontWeight: 400, marginRight: '10px' }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TITLE_BADGE:
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#D6EDFF',
                    color: '#004EAE',
                    borderRadius: '5px',
                    padding: '0 5px',
                    marginRight: '10px',
                  }}
                >
                  {printValue(element.afterValue)}
                </div>
              )
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

export const OperationOutputHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontFamily: 'Inter Medium', fontWeight: 400 }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TITLE_BADGE:
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#D6EDFF',
                    color: '#004EAE',
                    borderRadius: '5px',
                    padding: '0 5px',
                    marginRight: '10px',
                  }}
                >
                  {printValue(element.afterValue)}
                </div>
              )
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

export const MethodArgumentsHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontStyle: 'italic', marginRight: '10px' }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

export const MethodOutputHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div data-rowType={row.type} style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontStyle: 'italic' }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TITLE_BADGE:
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#D6EDFF',
                    color: '#004EAE',
                    borderRadius: '5px',
                    padding: '0 5px',
                    marginRight: '10px',
                  }}
                >
                  {printValue(element.afterValue)}
                </div>
              )
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

const DirectiveHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            switch (element.kind) {
              case ADV.MultipleElementKind.GRAPHQL_OPERATION_ARGUMENTS:
                return <Arguments key={index} element={element} />
              case ADV.MultipleElementKind.GRAPHQL_DIRECTIVE_LOCATIONS:
                return <DirectiveLocations key={index} element={element} />
            }
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontFamily: 'Inter Medium', fontWeight: 400, marginRight: '10px' }}>@{element.afterValue as any}</span>
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})

const GeneralHeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {/* <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button> */}
      <div className='row-content'>
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className="node-title" style={{ fontFamily: 'Inter Medium', fontWeight: 400, marginRight: '10px' }}>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TITLE_BADGE:
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#D6EDFF',
                    color: '#004EAE',
                    borderRadius: '5px',
                    padding: '0 5px',
                    marginRight: '10px',
                  }}
                >
                  {printValue(element.afterValue)}
                </div>
              )
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='node-type'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            case ADV.ElementKind.NODE_ASTERISK:
              return <span key={index} style={{ color: 'red' }}>*</span>
            case ADV.ElementKind.GRAPHQL_NODE_APPLIED_DIRECTIVE:
              return <AppliedDirective key={index} element={element} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})
