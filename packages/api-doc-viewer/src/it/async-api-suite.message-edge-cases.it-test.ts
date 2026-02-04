/**
 * Auto-generated screenshot tests for Async API Message Edge Cases stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Message Edge Cases', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('BindingWithRef', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--binding-with-ref'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('BindingWithCircularRefKindA', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--binding-with-circular-ref-kind-a'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('BindingWithCircularRefKindB', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--binding-with-circular-ref-kind-b'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('HeadersWithRef', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--headers-with-ref'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('HeadersWithCircularRefKindA', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--headers-with-circular-ref-kind-a'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('HeadersWithCircularRefKindB', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--headers-with-circular-ref-kind-b'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('PayloadWithRef', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--payload-with-ref'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('PayloadWithCircularRefKindA', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--payload-with-circular-ref-kind-a'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('PayloadWithCircularRefKindB', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--payload-with-circular-ref-kind-b'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('HeadersMultiformatWithRef', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--headers-multiformat-with-ref'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('HeadersMultiformatWithCircularRefKindA', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--headers-multiformat-with-circular-ref-kind-a'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('HeadersMultiformatWithCircularRefKindB', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--headers-multiformat-with-circular-ref-kind-b'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('PayloadMultiformatWithRef', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--payload-multiformat-with-ref'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('PayloadMultiformatWithCircularRefKindA', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--payload-multiformat-with-circular-ref-kind-a'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('PayloadMultiformatWithCircularRefKindB', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--payload-multiformat-with-circular-ref-kind-b'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('JsonSchemaInExtensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-edge-cases--json-schema-in-extensions'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
