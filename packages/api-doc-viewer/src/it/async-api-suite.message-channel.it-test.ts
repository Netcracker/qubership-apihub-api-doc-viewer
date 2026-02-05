/**
 * Auto-generated screenshot tests for Async API Suite 2 Message Channel stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI Suite 2 - Message Channel', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('channel-id', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--channel-id'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--title'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--address'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('summary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address-parameters', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--address-parameters'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('extensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--extensions'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--bindings-one-option'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('bindings-two-options-selected-first', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--bindings-two-options-selected-first'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('bindings-two-options-selected-second', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--bindings-two-options-selected-second'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-summary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--description-summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-address-parameters', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--description-address-parameters'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-extensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--description-extensions'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--description-bindings-one-option'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address-parameters-extensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--address-parameters-extensions'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address-parameters-bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--address-parameters-bindings-one-option'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('extensions-bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--extensions-bindings-one-option'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('edge-broken-ref-address-parameter', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--edge-broken-ref-address-parameter'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('edge-broken-ref-server-out-of-scope', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-channel--edge-broken-ref-server-out-of-scope'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
