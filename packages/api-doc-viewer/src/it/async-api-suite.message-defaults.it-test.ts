/**
 * Auto-generated screenshot tests for Async API Message Defaults stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI - Message Defaults', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  it('DefaultMessageTitleIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-message-title-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultMessageTitleIfName', async () => {
    story = await storyPage(
      page, 
      'async-api-suite-message-defaults--default-message-title-if-name'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultMessageTitleIfTitleAndName', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-message-title-if-title-and-name'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultMessageDescriptionIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-message-description-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultMessageDescriptionIfSummary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-message-description-if-summary'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultMessageDescriptionIfSummaryAndDescription', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-message-description-if-summary-and-description'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultOperationBindingVersionIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-operation-binding-version-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultChannelBindingVersionIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-channel-binding-version-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('DefaultMessageBindingVersionIfNothing', async () => {
    story = await storyPage(
      page,
      'async-api-suite-message-defaults--default-message-binding-version-if-nothing'
    )
    component = await story.viewComponent()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
