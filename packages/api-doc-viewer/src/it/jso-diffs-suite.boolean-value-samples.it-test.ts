/**
 * Screenshot tests for JSO Diffs Suite - booleanValue stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('JSO Diffs Suite - booleanValue', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('3.1-booleanValue-boolean-to-string', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-1-booleanvalue-boolean-to-string'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.2-booleanValue-boolean-to-number', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-2-booleanvalue-boolean-to-number'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.3-booleanValue-boolean-to-null', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-3-booleanvalue-boolean-to-null'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.4-booleanValue-boolean-to-object-primitive-props', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-4-booleanvalue-boolean-to-object-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.5-booleanValue-boolean-to-object-props-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-5-booleanvalue-boolean-to-object-props-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.6-booleanValue-boolean-to-object-props-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-6-booleanvalue-boolean-to-object-props-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.7-booleanValue-boolean-to-object-all-prop-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-7-booleanvalue-boolean-to-object-all-prop-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.8-booleanValue-boolean-to-array-primitives', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-8-booleanvalue-boolean-to-array-primitives'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.9-booleanValue-boolean-to-array-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-9-booleanvalue-boolean-to-array-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.10-booleanValue-boolean-to-array-items-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-10-booleanvalue-boolean-to-array-items-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('3.11-booleanValue-boolean-to-array-all-item-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-booleanvalue--case-3-11-booleanvalue-boolean-to-array-all-item-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
