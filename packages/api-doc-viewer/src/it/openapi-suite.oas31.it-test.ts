/**
 * Screenshot tests for OpenAPI Operation Suite - OAS 3.1: every case in display modes `detailed` and
 * `simple` (the same story, `displayMode` passed as a story arg).
 */
import { storyPageWithArgs } from './service/storybook-service'
import { waitForOpenApiOperationViewer, waitForRenderingComplete } from './service/viewer-waits'

/** [test name, story id, test ids clicked before the capture]. */
const CASES: ReadonlyArray<readonly [string, string, readonly string[]]> = [
  ['Case_01_full_operation', 'openapi-operation-suite-oas-3-1--case-01-full-operation', []],
  ['Case_02_no_responses', 'openapi-operation-suite-oas-3-1--case-02-no-responses', []],
  ['Case_03_security_mutual_tls_and_roles', 'openapi-operation-suite-oas-3-1--case-03-security-mutual-tls-and-roles', []],
  ['Case_04_reference_overrides_and_path_items', 'openapi-operation-suite-oas-3-1--case-04-reference-overrides-and-path-items', []],
]

describe('OpenAPI Operation Suite - OAS 3.1', () => {
  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  describe.each(['detailed', 'simple'])('display mode %s', (displayMode) => {
    it.each(CASES)('%s', async (_name, storyId, clicks) => {
      const story = await storyPageWithArgs(page, storyId, { displayMode })
      const component = await story.viewComponent()
      await waitForOpenApiOperationViewer(page)
      for (const testId of clicks) {
        await page.click(`[data-testid="${testId}"]`)
        await waitForRenderingComplete(page)
      }
      expect(await component.captureScreenshot()).toMatchImageSnapshot()
    })
  })
})
