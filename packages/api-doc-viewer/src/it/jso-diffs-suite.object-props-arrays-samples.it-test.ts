/**
 * Screenshot tests for JSO Diffs Suite - objectPropsArrays stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('JSO Diffs Suite - objectPropsArrays', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('7.1-objectPropsArrays-object-props-arrays-to-string', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-1-objectpropsarrays-object-props-arrays-to-string'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.2-objectPropsArrays-object-props-arrays-to-number', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-2-objectpropsarrays-object-props-arrays-to-number'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.3-objectPropsArrays-object-props-arrays-to-boolean', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-3-objectpropsarrays-object-props-arrays-to-boolean'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.4-objectPropsArrays-object-props-arrays-to-null', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-4-objectpropsarrays-object-props-arrays-to-null'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.5-objectPropsArrays-object-props-arrays-to-object-primitive-props', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-5-objectpropsarrays-object-props-arrays-to-object-primitive-props'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.6-objectPropsArrays-object-props-arrays-to-object-props-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-6-objectpropsarrays-object-props-arrays-to-object-props-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.7-objectPropsArrays-object-props-arrays-to-object-all-prop-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-7-objectpropsarrays-object-props-arrays-to-object-all-prop-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.8-objectPropsArrays-object-props-arrays-to-array-primitives', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-8-objectpropsarrays-object-props-arrays-to-array-primitives'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.9-objectPropsArrays-object-props-arrays-to-array-objects', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-9-objectpropsarrays-object-props-arrays-to-array-objects'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.10-objectPropsArrays-object-props-arrays-to-array-items-arrays', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-10-objectpropsarrays-object-props-arrays-to-array-items-arrays'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('7.11-objectPropsArrays-object-props-arrays-to-array-all-item-types', async () => {
    story = await storyPage(
      page,
      'jso-diffs-suite-objectpropsarrays--case-7-11-objectpropsarrays-object-props-arrays-to-array-all-item-types'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
