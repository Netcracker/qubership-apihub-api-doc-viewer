/**
 * Screenshot tests for OpenAPI Operation Suite - OAS 3.0: every case in display modes `detailed` and
 * `simple` (the same story, `displayMode` passed as a story arg).
 */
import { storyPageWithArgs } from './service/storybook-service'
import { waitForOpenApiOperationViewer, waitForRenderingComplete } from './service/viewer-waits'

/** [test name, story id, test ids clicked before the capture]. */
const CASES: ReadonlyArray<readonly [string, string, readonly string[]]> = [
  ['Case_01_full_operation', 'openapi-operation-suite-oas-3-0--case-01-full-operation', []],
  ['Case_01_full_operation_no_heading', 'openapi-operation-suite-oas-3-0--case-01-full-operation-no-heading', []],
  ['Case_02_minimal_operation', 'openapi-operation-suite-oas-3-0--case-02-minimal-operation', []],
  ['Case_03_security_inherited_from_document', 'openapi-operation-suite-oas-3-0--case-03-security-inherited-from-document', []],
  ['Case_03_security_three_alternatives', 'openapi-operation-suite-oas-3-0--case-03-security-three-alternatives', []],
  ['Case_03_security_three_alternatives (security-alternative-1 selected)', 'openapi-operation-suite-oas-3-0--case-03-security-three-alternatives', ['security-alternative-1']],
  ['Case_03_security_disabled_deprecated', 'openapi-operation-suite-oas-3-0--case-03-security-disabled-deprecated', []],
  ['Case_04_parameters_sources', 'openapi-operation-suite-oas-3-0--case-04-parameters-sources', []],
  ['Case_05_response_codes_palette', 'openapi-operation-suite-oas-3-0--case-05-response-codes-palette', []],
  ['Case_05_response_codes_palette (response-code-404 selected)', 'openapi-operation-suite-oas-3-0--case-05-response-codes-palette', ['response-code-404']],
]

describe('OpenAPI Operation Suite - OAS 3.0', () => {
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
