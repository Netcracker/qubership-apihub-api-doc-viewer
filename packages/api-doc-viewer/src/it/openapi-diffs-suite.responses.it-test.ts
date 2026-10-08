/**
 * Screenshot tests for OpenAPI Operation Diffs Suite - Responses Samples stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationDiffsViewer } from './service/viewer-waits'

describe('OpenAPI Operation Diffs Suite - Responses Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('01-response-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-01-response-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('02-response-code-case-renamed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-02-response-code-case-renamed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('03-response-description-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-03-response-description-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('04-response-header-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-04-response-header-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('05-response-media-type-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-05-response-media-type-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('06-response-schema-property-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-06-response-schema-property-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('07-response-body-only-media-type-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-07-response-body-only-media-type-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('08-response-body-only-schema-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-08-response-body-only-schema-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('09-response-all-headers-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-09-response-all-headers-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('10-response-added-with-headers-and-body', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-10-response-added-with-headers-and-body')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('11-response-code-renamed-and-description-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-11-response-code-renamed-and-description-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('12-response-changes-of-different-severity', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-12-response-changes-of-different-severity')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('13-responses-and-response-extensions-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-responses-samples--case-13-responses-and-response-extensions-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
