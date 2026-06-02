/**
 * Screenshot tests for Async API Diffs Suite - Channel Server Samples stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('Async API Diffs Suite - Channel Server Samples', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  async function waitForHtmlRenderingComplete() {
    await page.waitForFunction(() => document.readyState === 'complete')
    await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))))
  }

  async function switchToChannelSection() {
    await page.click('[data-testid="message-channel"]')
    await page.waitForSelector('[data-testid="message-channel-section"]', { visible: true })
  }

  it('1.1-channel-servers-host-protocol-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-1-1-channel-servers-host-protocol-changed'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('1.2-channel-servers-description-set', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-1-2-channel-servers-description-set'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('1.3-channel-servers-summary-set', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-1-3-channel-servers-summary-set'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.1-channel-servers0-bindings-add-one-more-binding', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-2-1-channel-servers0-bindings-add-one-more-binding'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.2-channel-servers0-bindings-remove-one-of-several-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-2-2-channel-servers0-bindings-remove-one-of-several-bindings'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.3-channel-servers0-bindings-add-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-2-3-channel-servers0-bindings-add-bindings'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.4-channel-servers0-bindings-remove-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-2-4-channel-servers0-bindings-remove-bindings'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.3-channel-servers-all-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-2-3-channel-servers-all-added'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.4-channel-servers-all-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-2-4-channel-servers-all-removed'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.1-channel-servers0-bindings-kafka-bindingVersion-changed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-3-1-channel-servers0-bindings-kafka-bindingversion-changed'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.2-channel-servers0-bindings-kafka-bindingVersion-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-3-2-channel-servers0-bindings-kafka-bindingversion-removed'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.3-channel-servers0-bindings-kafka-bindingVersion-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-3-3-channel-servers0-bindings-kafka-bindingversion-added'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('4.1-channel-server-bindings-kafka-internal-jso-changes', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-4-1-channel-server-bindings-kafka-internal-jso-changes'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('5.1-channel-servers-one-item-removed', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-5-1-channel-servers-one-item-removed'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('5.2-channel-servers-one-item-added', async () => {
    story = await storyPage(
      page,
      'async-api-diffs-suite-channel-server-samples--case-5-2-channel-servers-one-item-added'
    )
    component = await story.viewComponent()
    await switchToChannelSection()
    await waitForHtmlRenderingComplete()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
