/**
 * Manual screenshot tests for non-generated stories.
 * Add new `it()` blocks with the correct Storybook story id.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('manual stories', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('example manual story', async () => {
    // Replace with your real story id, e.g. "manual-section--my-custom-story"
    story = await storyPage(page, 'manual-section--my-custom-story')
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
