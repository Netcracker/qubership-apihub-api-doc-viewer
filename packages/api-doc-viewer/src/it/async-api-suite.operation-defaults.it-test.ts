/**
 * Auto-generated screenshot tests for Async API Operation Defaults stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Operation Defaults', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('DefaultOperationTitle', async () => {
    story = await storyPage(page, 'async-api-suite-operations--default-operation-title')
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultOperationDescriptionIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations--default-operation-description-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultOperationDescriptionIfSummary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations--default-operation-description-if-summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultOperationDescriptionIfSummaryAndDescr', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations--default-operation-description-if-summary-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
