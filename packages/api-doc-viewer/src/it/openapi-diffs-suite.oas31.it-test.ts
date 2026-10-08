/**
 * Screenshot tests for OpenAPI Operation Diffs Suite - OAS 3.1 Samples stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationDiffsViewer } from './service/viewer-waits'

describe('OpenAPI Operation Diffs Suite - OAS 3.1 Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('01-nullable-via-type-array', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-oas-3-1-samples--case-01-nullable-via-type-array')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('02-mutual-tls-alternative-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-oas-3-1-samples--case-02-mutual-tls-alternative-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('03-role-scopes-on-api-key', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-oas-3-1-samples--case-03-role-scopes-on-api-key')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
