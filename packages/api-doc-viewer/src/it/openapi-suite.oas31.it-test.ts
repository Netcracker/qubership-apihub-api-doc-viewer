/**
 * Screenshot tests for OpenAPI Operation Suite - OAS 3.1 stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationViewer } from './service/viewer-waits'

describe('OpenAPI Operation Suite - OAS 3.1', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('Case_01_full_operation', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-1--case-01-full-operation')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_02_no_responses', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-1--case-02-no-responses')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_03_security_mutual_tls_and_roles', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-1--case-03-security-mutual-tls-and-roles')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('Case_04_reference_overrides_and_path_items', async () => {
    story = await storyPage(page, 'openapi-operation-suite-oas-3-1--case-04-reference-overrides-and-path-items')
    component = await story.viewComponent()
    await waitForOpenApiOperationViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
