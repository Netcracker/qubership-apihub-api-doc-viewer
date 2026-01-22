/**
 * Auto-generated screenshot tests for Async API Message General stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Message General', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('empty-message', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('name', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-name'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-title'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('name-and-description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-name-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title-and-description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-title-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('name-and-title-and-description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-name-and-title-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-headers', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-primitive-headers'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('objective-headers', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-objective-headers'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-primitive-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('objective-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-objective-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-headers-and-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-primitive-headers-and-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('objective-headers-and-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-objective-headers-and-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-headers-and-objective-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-primitive-headers-and-objective-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('objective-headers-and-primitive-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-objective-headers-and-primitive-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('message-description-and-headers', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-description-and-headers'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('message-description-and-payload', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-description-and-payload'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('operation-description-and-empty-message', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-description-and-message-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2-messages-with-names', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-two-messages-with-names'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
