/**
 * Screenshot tests for DDL API Diffs Suite - Column Changes Except Types Samples stories.
 * Edit together with src/stories/ddlapi-diffs-suite/column-changes-except-types-samples.stories.tsx.
 */
import path from "path";
import { StoryPage } from "../service/story-page";
import { ViewComponent } from "../service/view-component";
import { storyPage } from "../service/storybook-service";

const SNAPSHOTS_DIR = path.resolve(__dirname, "..", "__image_snapshots__");

describe('DDL API Diffs Suite - Column Changes Except Types Samples', () => {
  let story: StoryPage;
  let component: ViewComponent;

  beforeEach(async () => {
    await jestPuppeteer.resetPage();
  });

  async function waitForDdlTableDiffsViewer() {
    await page.waitForSelector('[data-testid="ddl-table-diffs-viewer"]', { visible: true });
    await page.waitForFunction(() => document.readyState === "complete");
    await page.evaluate(() => new Promise<void>(resolve =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
    ));
  }

  it('01-add-one-more-column-no-badges', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-01-add-one-more-column-no-badges',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-01-add-one-more-column-no-badges-${counter}`,
    });
  });

  it('02-remove-one-more-column-no-badges', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-02-remove-one-more-column-no-badges',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-02-remove-one-more-column-no-badges-${counter}`,
    });
  });

  it('03-add-column-primary-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-03-add-column-primary-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-03-add-column-primary-key-${counter}`,
    });
  });

  it('04-add-column-foreign-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-04-add-column-foreign-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-04-add-column-foreign-key-${counter}`,
    });
  });

  it('05-add-column-unique', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-05-add-column-unique',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-05-add-column-unique-${counter}`,
    });
  });

  it('06-add-column-not-null', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-06-add-column-not-null',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-06-add-column-not-null-${counter}`,
    });
  });

  it('07-add-column-generated-identity', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-07-add-column-generated-identity',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-07-add-column-generated-identity-${counter}`,
    });
  });

  it('08-remove-column-primary-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-08-remove-column-primary-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-08-remove-column-primary-key-${counter}`,
    });
  });

  it('09-remove-column-foreign-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-09-remove-column-foreign-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-09-remove-column-foreign-key-${counter}`,
    });
  });

  it('10-remove-column-unique', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-10-remove-column-unique',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-10-remove-column-unique-${counter}`,
    });
  });

  it('11-remove-column-not-null', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-11-remove-column-not-null',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-11-remove-column-not-null-${counter}`,
    });
  });

  it('12-remove-column-generated-identity', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-12-remove-column-generated-identity',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-12-remove-column-generated-identity-${counter}`,
    });
  });

  it('13-existing-column-became-primary-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-13-existing-column-became-primary-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-13-existing-column-became-primary-key-${counter}`,
    });
  });

  it('14-existing-column-became-foreign-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-14-existing-column-became-foreign-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-14-existing-column-became-foreign-key-${counter}`,
    });
  });

  it('15-existing-column-became-unique', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-15-existing-column-became-unique',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-15-existing-column-became-unique-${counter}`,
    });
  });

  it('16-existing-column-became-generated-identity', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-16-existing-column-became-generated-identity',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-16-existing-column-became-generated-identity-${counter}`,
    });
  });

  it('17-existing-column-became-generated-expression', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-17-existing-column-became-generated-expression',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-17-existing-column-became-generated-expression-${counter}`,
    });
  });

  it('18-existing-column-became-not-null', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-18-existing-column-became-not-null',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-18-existing-column-became-not-null-${counter}`,
    });
  });

  it('19-existing-column-lost-primary-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-19-existing-column-lost-primary-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-19-existing-column-lost-primary-key-${counter}`,
    });
  });

  it('20-existing-column-lost-foreign-key', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-20-existing-column-lost-foreign-key',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-20-existing-column-lost-foreign-key-${counter}`,
    });
  });

  it('21-existing-column-lost-unique', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-21-existing-column-lost-unique',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-21-existing-column-lost-unique-${counter}`,
    });
  });

  it('22-existing-column-lost-generated-identity', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-22-existing-column-lost-generated-identity',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-22-existing-column-lost-generated-identity-${counter}`,
    });
  });

  it('23-existing-column-lost-generated-expression', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-23-existing-column-lost-generated-expression',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-23-existing-column-lost-generated-expression-${counter}`,
    });
  });

  it('24-existing-column-lost-not-null', async () => {
    story = await storyPage(
      page,
      'ddl-api-diffs-suite-column-changes-except-types-samples--case-24-existing-column-lost-not-null',
    );
    await waitForDdlTableDiffsViewer();
    component = await story.viewComponent();
    expect(await component.captureScreenshot()).toMatchImageSnapshot({
      customSnapshotsDir: SNAPSHOTS_DIR,
      customSnapshotIdentifier: ({ counter }) => `ddl-api-diffs-suite-column-changes-except-types-samples-24-existing-column-lost-not-null-${counter}`,
    });
  });
});
