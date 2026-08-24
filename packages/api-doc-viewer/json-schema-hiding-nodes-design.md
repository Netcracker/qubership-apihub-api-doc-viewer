# Hiding unchanged nodes in JSON Schema Next Viewer

In JSON Schema data model there are 2 types of nodes: simple and complex.

## What I mean when say `node is changed` when node is simple:

1. Field `nodeDiffs` is not an empty object (`{}`)
2. OR (field `nodeDescendantsDiffs` is not an empty record)
3. OR (field `nodeDiffsSummary` or `nodeDescendantDiffsSummary` is not an empty set)
4. OR (field `nodeDiffsSeverities` is not an empty record)

**Note.** Be careful on circular nodes (`isCycle = true`).

## What I mean when say `node is changed` when node is complex:

1. At least 1 of `nested nodes` were wholly `added` or `removed`
2. OR (at least 1 of `nested nodes` has field `nodeDiffsSummary` or `nodeDescendantsDiffsSummary` which is not an empty set)
3. Rules 1-2 are applied recursively. If `oneOf`, `anyOf`, `allOf` containing inside `oneOf`, `anyOf` or `allOf`, we checks conditions 1-2 until terminal (leaf) node is reached.

**Note.** Be careful on circular nodes (`isCycle = true`).

## What I mean when say `unchanged nodes`:

- Continuous list of consecutive nodes for each of which `node is change` is true.

### Example

**before.yaml**
```yaml
type: object
properties:
  prop1:
    type: string
  prop2:
    type: number
  prop3:
    type: boolean
  prop5:
    type: string
```

**after.yaml**
```yaml
type: object
properties:
  prop1:
    type: string
  prop2:
    type: number
  prop4:
    type: integer
  prop5:
    type: string
```

`Node is changed` is `true` for `prop3` and `prop4`.
Also there are 2 blocks of `unchanged nodes`:
1. `prop1` and `prop2`
2. `prop5`

## Important not obvious remark

Let:

- there are 3 nodes: A, B, C and B, C are descendants of A.
- node B is changed, node C is unchanged.

Then:

- node A and B are visible
- node C is hidden under button "Show 1 unchanged node(s)"

## Target behavior

Each block of `unchanged nodes` must be hidden by special button `Show unchanged nodes` which will show this block of nodes. After the block is appeared, it never disappears (becomes persistent and always visible except cases of manual expanding/collapsing the nodes or their parents/children).

## Constraints

- Only React state for modelling state of view
- Be careful with circular nodes (`isCycle = true`)
- The feature is applied only on `tree with diffs` data model and `viewer with diffs`, so it's better to create separate sub-layer for the feature