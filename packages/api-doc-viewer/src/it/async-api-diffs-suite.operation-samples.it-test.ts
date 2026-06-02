/**
 * Screenshot tests for Async API Diffs Suite - Operation Samples stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('Async API Diffs Suite - Operation Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  async function waitForHtmlRenderingComplete() {
    await page.waitForFunction(() => document.readyState === 'complete')
    await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))))
  }

  async function switchToOperationSection() {
    await page.click('[data-testid="message-operation"]')
    await page.waitForSelector('[data-testid="message-operation-section"]', { visible: true })
  }

  it('1.1-operation-title-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-1-1-operation-title-changed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('1.2-operation-title-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-1-2-operation-title-removed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('1.3-operation-title-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-1-3-operation-title-added'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.1-operation-description-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-1-operation-description-changed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.2-operation-description-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-2-operation-description-removed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.3-operation-description-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-3-operation-description-added'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.4-operation-summary-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-4-operation-summary-changed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.5-operation-summary-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-5-operation-summary-removed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.6-operation-description-moved-to-summary', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-6-operation-description-moved-to-summary'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.7-operation-summary-moved-to-description', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-2-7-operation-summary-moved-to-description'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.1-operation-bindings-add-one-more-binding', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-3-1-operation-bindings-add-one-more-binding'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.2-operation-bindings-remove-one-of-several-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-3-2-operation-bindings-remove-one-of-several-bindings'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.3-operation-bindings-add-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-3-3-operation-bindings-add-bindings'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.4-operation-bindings-remove-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-3-4-operation-bindings-remove-bindings'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('4.1-operation-bindings-kafka-bindingVersion-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-4-1-operation-bindings-kafka-binding-version-changed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('4.2-operation-bindings-kafka-bindingVersion-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-4-2-operation-bindings-kafka-binding-version-removed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('4.3-operation-bindings-kafka-bindingVersion-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-4-3-operation-bindings-kafka-binding-version-added'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('5.1-operation-bindings-kafka-internal-jso-changes', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-5-1-operation-bindings-kafka-internal-jso-changes'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.1-operation-x-second-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-6-1-operation-x-second-added'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.2-operation-x-second-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-6-2-operation-x-second-removed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.3-operation-x-second-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-6-3-operation-x-second-changed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.4-operation-x-first-and-x-second-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-6-4-operation-x-first-and-x-second-added'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.5-operation-x-first-and-x-second-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-operation-samples--case-6-5-operation-x-first-and-x-second-removed'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
