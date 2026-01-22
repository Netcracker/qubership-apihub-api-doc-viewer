/**
 * Auto-generated screenshot tests for Async API Channel General stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Channel General', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('empty-channel', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-general--send-operation-with-root-level-channel-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-general--send-operation-with-root-level-channel-with-title'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-general--send-operation-with-root-level-channel-with-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title-and-description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-general--send-operation-with-root-level-channel-with-title-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('operation-description-and-empty-channel', async () => {
    story = await storyPage(
      page,
      'async-api-suite-channel-general--send-operation-with-description-and-root-level-channel-with-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
