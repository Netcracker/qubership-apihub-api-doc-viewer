/**
 * Auto-generated screenshot tests for Async API Channel Defaults stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Channel Defaults', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('DefaultChannelTitle', async () => {
    story = await storyPage(
      page, 
      'async-api-suite-channel-defaults--default-channel-title'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultChannelDescriptionIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-defaults--default-channel-description-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultChannelDescriptionIfSummary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-defaults--default-channel-description-if-summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultChannelDescriptionIfSummaryAndDescription', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-defaults--default-channel-description-if-summary-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
