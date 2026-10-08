/**
 * Screenshot tests for OpenAPI Operation Suite - OAS 3.0 stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationViewer, waitForRenderingComplete } from './service/viewer-waits'

describe('OpenAPI Operation Suite - OAS 3.0', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('Case_01_full_operation', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-01-full-operation')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_01_full_operation_simple_mode', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-01-full-operation-simple-mode')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_01_full_operation_no_heading', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-01-full-operation-no-heading')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_02_minimal_operation', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-02-minimal-operation')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_03_security_inherited_from_document', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-03-security-inherited-from-document')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_03_security_three_alternatives', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-03-security-three-alternatives')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_03_security_three_alternatives (security-alternative-1 selected)', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-03-security-three-alternatives')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    await page.click('[data-testid="security-alternative-1"]')
    await waitForRenderingComplete(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_03_security_disabled_deprecated', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-03-security-disabled-deprecated')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_04_parameters_sources', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-04-parameters-sources')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_05_response_codes_palette', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-05-response-codes-palette')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_05_response_codes_palette (response-code-404 selected)', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-0--case-05-response-codes-palette')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    await page.click('[data-testid="response-code-404"]')
    await waitForRenderingComplete(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
