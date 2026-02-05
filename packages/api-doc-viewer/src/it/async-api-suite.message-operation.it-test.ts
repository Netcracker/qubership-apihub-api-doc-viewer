/**
 * Auto-generated screenshot tests for Async API Suite 2 Message Operation stories.
 */
import { StoryPage } from './service/story-page'
import { ViewComponent } from './service/view-component'
import { storyPage } from './service/storybook-service'

describe('AsyncAPI Suite 2 - Message Operation', () => {
  let story: StoryPage
  let component: ViewComponent

  beforeEach(async () => {
    await jestPuppeteer.resetPage()
  })

  async function switchToOperationSection() {
    await page.click('[data-testid="message-operation"]')
    await page.waitForSelector('[data-testid="message-operation-section"]', { visible: true })
  }

  it('operation-id', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--operation-id'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('title', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--title'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--description'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('summary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--summary'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('extensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--extensions'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--bindings-one-option'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('bindings-two-options-selected-first', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--bindings-two-options-selected-first'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('bindings-two-options-selected-second', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--bindings-two-options-selected-second'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-summary', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--description-summary'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-extensions', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--description-extensions'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('description-bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--description-bindings-one-option'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })

  it('extensions-bindings-one-option', async () => {
    story = await storyPage(
      page,
      'async-api-suite-2-message-operation--extensions-bindings-one-option'
    )
    component = await story.viewComponent()
    await switchToOperationSection()
    expect(await component.captureScreenshot()).toMatchImageSnapshot()
  })
})
