/**
 * Screenshot tests for OpenAPI Operation Diffs Suite - Operation Samples stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationDiffsViewer } from './service/viewer-waits'

describe('OpenAPI Operation Diffs Suite - Operation Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('01-summary-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-01-summary-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('02-description-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-02-description-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('03-external-docs-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-03-external-docs-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('04-external-docs-url-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-04-external-docs-url-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('05-path-parameter-renamed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-05-path-parameter-renamed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('06-whole-operation-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-06-whole-operation-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('07-extensions-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-07-extensions-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('08-operation-id-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-08-operation-id-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('09-deprecated-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-09-deprecated-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('10-deprecated-added-without-summary', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-operation-samples--case-10-deprecated-added-without-summary')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
