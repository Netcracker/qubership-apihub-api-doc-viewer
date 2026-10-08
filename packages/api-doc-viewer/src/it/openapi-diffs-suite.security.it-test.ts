/**
 * Screenshot tests for OpenAPI Operation Diffs Suite - Security Samples stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'
import { waitForOpenApiOperationDiffsViewer } from './service/viewer-waits'

describe('OpenAPI Operation Diffs Suite - Security Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('01-alternative-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-security-samples--case-01-alternative-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('02-scope-added', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-security-samples--case-02-scope-added')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('03-scheme-added-to-alternative', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-security-samples--case-03-scheme-added-to-alternative')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('04-scheme-definition-changed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-security-samples--case-04-scheme-definition-changed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('05-root-security-overridden', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-security-samples--case-05-root-security-overridden')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('06-security-removed', async () => {
    story = await storyPage(page, 'openapi-operation-diffs-suite-security-samples--case-06-security-removed')
    component = await story.viewComponent()
    await waitForOpenApiOperationDiffsViewer(page)
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
