/**
 * Screenshot tests for JSO Diffs Suite - numberValue stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('JSO Diffs Suite - numberValue', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('2.1-numberValue-number-to-string', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-1-numbervalue-number-to-string'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.2-numberValue-number-to-boolean', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-2-numbervalue-number-to-boolean'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.3-numberValue-number-to-null', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-3-numbervalue-number-to-null'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.4-numberValue-number-to-object-primitive-props', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-4-numbervalue-number-to-object-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.5-numberValue-number-to-object-props-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-5-numbervalue-number-to-object-props-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.6-numberValue-number-to-object-props-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-6-numbervalue-number-to-object-props-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.7-numberValue-number-to-object-all-prop-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-7-numbervalue-number-to-object-all-prop-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.8-numberValue-number-to-array-primitives', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-8-numbervalue-number-to-array-primitives'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.9-numberValue-number-to-array-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-9-numbervalue-number-to-array-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.10-numberValue-number-to-array-items-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-10-numbervalue-number-to-array-items-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('2.11-numberValue-number-to-array-all-item-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-numbervalue--case-2-11-numbervalue-number-to-array-all-item-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
