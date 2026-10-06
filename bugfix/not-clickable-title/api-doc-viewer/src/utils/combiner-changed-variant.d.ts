/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Clicks the oneOf/anyOf combiner variant option that actually contains the diff (detected via
 * the `diffs-border-shadow_*` / `diffs-round-marker_*` classes `CombinerSelectorRow`'s underlying
 * `Selector` component applies to changed options), instead of leaving the default first-option
 * selection. Recurses into nested combiners revealed by each click until no changed-but-unselected
 * option remains (leaf state). Option buttons carry `data-testid="json-schema-combiner-option-
 * <index>"` — index-based and not globally unique across properties/diff panes (unlike the
 * legacy viewer's node-id-based `data-testid`s) — but this algorithm never needed uniqueness: it
 * just repeatedly clicks *any* unselected, diff-indicated button anywhere in `root` until none
 * remain, which converges correctly regardless of index collisions between independent combiners.
 *
 * Pure DOM, no external dependencies, so it can run identically from a Storybook `play` function
 * (browser context) or via Puppeteer's `page.evaluate()` — this is the single implementation
 * shared by both call sites. Everything it needs (constants, the render-settle helper) is
 * declared *inside* this function body rather than at module scope: `page.evaluate()` sends
 * Puppeteer's callback via `Function.prototype.toString()` and re-evaluates only that source in
 * the browser, so any reference to an outer module-level `const`/helper resolves to nothing
 * there (`ReferenceError`) even though the exact same code works fine when called directly from
 * a `play` function inside the bundled story module. Keep it this way — do not hoist any of the
 * declarations below back out to module scope.
 */
export declare function switchCombinerNodesToChangedVariant(root?: ParentNode, maxIterations?: number): Promise<void>;
