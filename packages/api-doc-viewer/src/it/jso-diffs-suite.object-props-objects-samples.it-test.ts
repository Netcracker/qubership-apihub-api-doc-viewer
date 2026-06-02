/**
 * Screenshot tests for JSO Diffs Suite - objectPropsObjects stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('JSO Diffs Suite - objectPropsObjects', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('6.1-objectPropsObjects-object-props-objects-to-string', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-1-objectpropsobjects-object-props-objects-to-string'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.2-objectPropsObjects-object-props-objects-to-number', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-2-objectpropsobjects-object-props-objects-to-number'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.3-objectPropsObjects-object-props-objects-to-boolean', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-3-objectpropsobjects-object-props-objects-to-boolean'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.4-objectPropsObjects-object-props-objects-to-null', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-4-objectpropsobjects-object-props-objects-to-null'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.5-objectPropsObjects-object-props-objects-to-object-primitive-props', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-5-objectpropsobjects-object-props-objects-to-object-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.6-objectPropsObjects-object-props-objects-to-object-props-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-6-objectpropsobjects-object-props-objects-to-object-props-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.7-objectPropsObjects-object-props-objects-to-object-all-prop-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-7-objectpropsobjects-object-props-objects-to-object-all-prop-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.8-objectPropsObjects-object-props-objects-to-array-primitives', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-8-objectpropsobjects-object-props-objects-to-array-primitives'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.9-objectPropsObjects-object-props-objects-to-array-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-9-objectpropsobjects-object-props-objects-to-array-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.10-objectPropsObjects-object-props-objects-to-array-items-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-10-objectpropsobjects-object-props-objects-to-array-items-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('6.11-objectPropsObjects-object-props-objects-to-array-all-item-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsobjects--case-6-11-objectpropsobjects-object-props-objects-to-array-all-item-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
