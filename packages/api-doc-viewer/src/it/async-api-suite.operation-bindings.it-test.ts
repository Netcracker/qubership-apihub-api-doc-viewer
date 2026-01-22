/**
 * Auto-generated screenshot tests for Async API Operation Bindings stories.
 */
import { StoryPage } from './service/story-page'
import { storyPage } from './service/storybook-service'
import { ViewComponent } from './service/view-component'

describe('AsyncAPI - Operation Bindings', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('empty-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations-bindings--send-operation-with-bindings-kafka-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('primitive-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations-bindings--send-operation-with-bindings-kafka-with-only-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('object-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations-bindings--send-operation-with-bindings-kafka-with-object-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('schema-props', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations-bindings--send-operation-with-bindings-kafka-with-schema-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('operation-description-and-empty-binding', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations-bindings--send-operation-with-description-and-bindings-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2-bindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations-bindings--send-operation-two-bindings'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
