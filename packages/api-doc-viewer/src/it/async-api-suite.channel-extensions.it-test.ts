/**
 * Auto-generated screenshot tests for Async API Channel Extensions stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Channel Extensions', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('ExtensionsInChannel', async () => {
    story = await storyPage(
      page, 
      'async-api-suite-channel-extensions--extensions-in-channel'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('ExtensionsInChannelBindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-extensions--extensions-in-channel-bindings'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
