# Response-code selector (Selector tones)

The response codes in the **Responses** header are the shared `Selector` with a per-option
**tone**. Status: **planned**.

## Why not a new component

`Selector` (`shared-components/Selector/Selector.tsx`) already owns option rendering, selection,
per-side visibility of wholly added / removed options, change markers, and border-shadow diff
chrome. The response codes need exactly that plus color. A tone is one optional field on
`SelectorOption`; every existing caller (AsyncAPI sections, bindings, combiner selector rows)
keeps the default and does not change.

## API change

```typescript
// shared-components/Selector/types.ts
export enum SelectorOptionTone {
  Neutral = 'neutral',   // default — today's grey look
  Success = 'success',   // green
  Info = 'info',         // blue
  Warning = 'warning',   // orange
  Danger = 'danger',     // red
}

// shared-components/Selector/Selector.tsx
export type SelectorOption<N extends ITreeNode, V extends object | null = object | null> = {
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  tone?: SelectorOptionTone        // new; undefined = Neutral
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}
```

The button gets one more class: `button-selector-option_tone-<tone>` (only for non-neutral tones,
so neutral markup stays byte-identical and existing screenshots do not move).

## Mapping (`utils/openapi/response-code-tone.ts`)

| `OpenApiResponseCodeClass` | Tone | Color |
| --- | --- | --- |
| `2XX` | `Success` | green |
| `3XX` | `Info` | blue |
| `4XX` | `Warning` | orange |
| `5XX` | `Danger` | red |
| `1XX`, `default`, `unknown` | `Neutral` | grey |

The class comes from next-data-model (`OpenApiResponseCode.resolveClass`, stored on the `response`
node value); the viewer only maps class → tone. Ranges (`2XX`) and explicit codes (`200`) share the
class color.

## Styles (`Selector.css`)

| State | Neutral (unchanged) | Toned |
| --- | --- | --- |
| Idle | white background, `#8F9EB4` border and text | white background, tone border and text |
| Hover | `#D5DCE3` background | tone tint background (`-50` shade) |
| Selected | `#D5DCE3` background, `#626D82` text | **solid** tone background, white text |

| Tone | Border / text / selected background | Hover tint |
| --- | --- | --- |
| Success | `rgb(22 163 74)` (green-600) | `rgb(240 253 244)` |
| Info | `rgb(37 99 235)` (blue-600) | `rgb(239 246 255)` |
| Warning | `rgb(234 88 12)` (orange-600) | `rgb(255 247 237)` |
| Danger | `rgb(220 38 38)` (red-600) | `rgb(254 242 242)` |

Rules:

1. **Selected is solid, never a pale tint.** The diff palette uses pale green / red / yellow
   backgrounds for added / removed / changed rows (`--diffs-background-*`); a pale green selected
   `2XX` would read as "added". Solid fills cannot be confused with diff chrome.
2. **Diff chrome stays on top.** Diff border shadows (`DiffsClassesBuilder.borderShadow`) are
   `box-shadow`, toned borders are `border-color` — both stay visible together. The change marker
   (`roundMarker`) is unchanged. Verify every tone × {idle, selected} × {add, remove, replace marker}
   in a Storybook story before snapshotting.
3. **Font sizes stay with the variant** (`_primary` 20px, `_secondary` 15px); the Responses header
   uses `Secondary`.

## Diffs

Unchanged `Selector` semantics, fed from `response` nodes:

| Case | Origin side | Changed side |
| --- | --- | --- |
| Response added | option hidden | option shown, green border shadow |
| Response removed | option shown, red border shadow | option hidden |
| Code renamed (`4xx` → `4XX`) | `4xx` (title function per side) | `4XX` |
| Changes inside the response | change marker from `diffsSummary` ∪ `descendantDiffsSummary` (includes nested schema changes via `aggregatedDiffsMetaKey`) | same |

## Tests

- Unit test (`packages/api-doc-viewer/tests/`): every class → tone; CSS-free module.
- Story `OpenAPI Operation Suite/OAS 3.0/Response Codes Palette` (`oas30/05-response-codes-palette`):
  all classes, ranges, `default`, canonical order; ITs click `response-code-404` and
  `response-code-default` to capture selected Warning and Neutral states.
- Regression: AsyncAPI section / bindings and JSON Schema combiner screenshot ITs must not change.

## Related documents

- [../entities/responses.md](../entities/responses.md)
