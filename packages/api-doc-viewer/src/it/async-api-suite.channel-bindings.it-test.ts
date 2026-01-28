/**
 * Auto-generated screenshot tests for Async API Channel Bindings stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Channel Bindings', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('empty-binding', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-bindings--send-operation-with-root-level-channel-with-binding-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-bindings--send-operation-with-root-level-channel-with-binding-with-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('object-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-bindings--send-operation-with-root-level-channel-with-binding-with-object-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('schema-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-bindings--send-operation-with-root-level-channel-with-binding-with-schema-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('channel-description-and-empty-binding', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-bindings--send-operation-with-root-level-channel-with-description-and-binding-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-bindings--send-operation-with-root-level-channel-with-two-bindings'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
