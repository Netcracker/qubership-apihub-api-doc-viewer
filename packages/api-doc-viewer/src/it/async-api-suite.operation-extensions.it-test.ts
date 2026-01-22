/**
 * Auto-generated screenshot tests for Async API Operation Extensions stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Operation Extensions', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('ExtensionsInOperation', async () => {
    story = await storyPage(page, 'async-api-suite-operations--extensions-in-operation')
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('ExtensionsInOperationBindings', async () => {
    story = await storyPage(
      page,
      'async-api-suite-operations--extensions-in-operation-bindings'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
