/**
 * Selects the given OpenAPI selector options (security alternative, response code, media type)
 * in order, so a story or a screenshot shows the option the case covers instead of the initial
 * one. Each test id is waited for (an option can appear only after the previous click, e.g. a
 * response media type after the response code), and clicked only when not yet selected.
 *
 * Pure DOM, no external dependencies: the single implementation shared by a Storybook `play`
 * function and Puppeteer's `page.evaluate()`. `page.evaluate()` re-evaluates only this function's
 * source in the browser, so every constant and helper is declared INSIDE the body - do not hoist
 * them to module scope (same contract as `switchCombinerNodesToChangedVariant`).
 */
export declare function switchOpenApiOptions(testIds: readonly string[], root?: ParentNode): Promise<void>;
