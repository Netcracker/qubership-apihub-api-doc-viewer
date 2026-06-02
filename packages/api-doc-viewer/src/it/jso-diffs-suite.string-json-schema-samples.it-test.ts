/**
 * Screenshot tests for JSO Diffs Suite - stringJsonSchema stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('JSO Diffs Suite - stringJsonSchema', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('13.1-stringJsonSchema-add-primitive-json-schema', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-13-1-stringjsonschema-add-primitive-json-schema'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('13.3-stringJsonSchema-remove-primitive-json-schema', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-13-3-stringjsonschema-remove-primitive-json-schema'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.1-stringJsonSchema-description-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-1-stringjsonschema-description-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.2-stringJsonSchema-enum-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-2-stringjsonschema-enum-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.3-stringJsonSchema-minLength-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-3-stringjsonschema-minlength-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.4-stringJsonSchema-maxLength-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-4-stringjsonschema-maxlength-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.5-stringJsonSchema-pattern-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-5-stringjsonschema-pattern-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.6-stringJsonSchema-format-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-6-stringjsonschema-format-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.7-stringJsonSchema-default-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-7-stringjsonschema-default-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('14.8-stringJsonSchema-examples-changed', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-stringjsonschema--case-14-8-stringjsonschema-examples-changed'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
