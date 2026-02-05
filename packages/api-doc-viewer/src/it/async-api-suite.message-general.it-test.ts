/**
 * Auto-generated screenshot tests for Async API Suite 2 Message stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI Suite 2 - Message General', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('message-id-send', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--message-id-send'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('message-id-receive', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--message-id-receive'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('name', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--name'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--title'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('name-title', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--name-title'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--address'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address-description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--address-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address-summary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--address-summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('address-description-summary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message--address-description-summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
