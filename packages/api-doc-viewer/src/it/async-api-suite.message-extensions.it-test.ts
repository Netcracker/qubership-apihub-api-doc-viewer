/**
 * Auto-generated screenshot tests for Async API Message Extensions stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Message Extensions', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('ExtensionsInMessage', async () => {
    story = await storyPage(page, 'async-api-suite-messages--extensions-in-message')
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('ExtensionsInMessageBindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-messages--extensions-in-message-bindings'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
