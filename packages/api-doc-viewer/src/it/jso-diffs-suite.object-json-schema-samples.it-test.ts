/**
 * Screenshot tests for JSO Diffs Suite - objectJsonSchema stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('JSO Diffs Suite - objectJsonSchema', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('13.2-objectJsonSchema-add-complex-json-schema', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-13-2-objectjsonschema-add-complex-json-schema'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('13.4-objectJsonSchema-remove-complex-json-schema', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-13-4-objectjsonschema-remove-complex-json-schema'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.1-objectJsonSchema-description-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-1-objectjsonschema-description-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.2-objectJsonSchema-title-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-2-objectjsonschema-title-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.3-objectJsonSchema-title-added', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-3-objectjsonschema-title-added'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.4-objectJsonSchema-title-removed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-4-objectjsonschema-title-removed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.5-objectJsonSchema-examples-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-5-objectjsonschema-examples-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.6-objectJsonSchema-property-added', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-6-objectjsonschema-property-added'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.7-objectJsonSchema-property-removed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-7-objectjsonschema-property-removed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('15.8-objectJsonSchema-required-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectjsonschema--case-15-8-objectjsonschema-required-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
