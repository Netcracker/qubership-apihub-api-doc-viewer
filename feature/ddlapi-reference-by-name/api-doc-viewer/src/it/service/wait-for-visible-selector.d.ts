import type { Page } from 'puppeteer';
export declare function waitForVisibleSelector(page: Page, selector: string | undefined): Promise<void>;
