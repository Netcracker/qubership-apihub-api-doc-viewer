/**
 * Screenshot tests for OpenAPI Operation Diffs Suite - Request Samples stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationDiffsViewer } from './service/viewer-waits'

describe('OpenAPI Operation Diffs Suite - Request Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('01-query-parameter-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-01-query-parameter-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('02-all-headers-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-02-all-headers-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('03-mixed-header-changes', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-03-mixed-header-changes')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('04-parameter-required-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-04-parameter-required-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('05-parameter-moved-query-to-header', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-05-parameter-moved-query-to-header')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('06-body-media-type-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-06-body-media-type-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('07-body-media-type-renamed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-07-body-media-type-renamed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('08-body-description-and-schema-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-08-body-description-and-schema-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('09-request-body-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-09-request-body-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('10-request-body-became-optional', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-10-request-body-became-optional')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('11-description-moved-entry-to-schema', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-11-description-moved-entry-to-schema')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('12-description-entry-removed-schema-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-12-description-entry-removed-schema-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('13-description-schema-removed-entry-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-13-description-schema-removed-entry-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14-description-both-places-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-14-description-both-places-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15-description-schema-changed-under-entry', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-15-description-schema-changed-under-entry')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('16-parameter-schema-to-content', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-16-parameter-schema-to-content')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('17-parameter-content-media-type-renamed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-17-parameter-content-media-type-renamed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('18-parameter-content-media-type-replaced', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-18-parameter-content-media-type-replaced')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('19-body-only-media-type-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-19-body-only-media-type-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('20-body-only-schema-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-20-body-only-schema-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('21-body-only-schema-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-21-body-only-schema-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('22-body-media-type-removed-description-kept', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-22-body-media-type-removed-description-kept')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('23-body-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-23-body-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('24-parameter-extension-added-and-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-24-parameter-extension-added-and-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('25-parameter-extension-moved-to-schema', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-25-parameter-extension-moved-to-schema')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('26-parameter-extension-nested-change', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-26-parameter-extension-nested-change')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('27-body-and-media-type-extensions-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-27-body-and-media-type-extensions-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('28-media-type-extension-shadows-schema-root', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-request-samples--case-28-media-type-extension-shadows-schema-root')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
