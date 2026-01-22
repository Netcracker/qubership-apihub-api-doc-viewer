/**
 * Auto-generated screenshot tests for Async API Message Bindings stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Message Bindings', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('empty-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-bindings-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-bindings-with-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('object-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-bindings-with-object-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('schema-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-bindings-with-schema-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('message-description-and-empty-binding', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-description-and-binding-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--send-operation-with-message-with-two-bindings'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
