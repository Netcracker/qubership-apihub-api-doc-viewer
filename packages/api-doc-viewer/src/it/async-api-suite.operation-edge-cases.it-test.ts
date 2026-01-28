/**
 * Auto-generated screenshot tests for Async API Operation Edge Cases stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Operation Edge Cases', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('BindingWithRef', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operation-edge-cases--binding-with-ref'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('BindingWithCircularRefKindA', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operation-edge-cases--binding-with-circular-ref-kind-a'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('BindingWithCircularRefKindB', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operation-edge-cases--binding-with-circular-ref-kind-b'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('JsonSchemaInExtensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operation-edge-cases--json-schema-in-extensions'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
