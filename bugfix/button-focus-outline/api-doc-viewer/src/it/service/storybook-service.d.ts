import { Page } from 'puppeteer';
import { StoryPage } from './story-page';
export declare function storyPage(page: Page, storyName: string): Promise<StoryPage>;
export declare function storyPageWithArgs(page: Page, storyName: string, args?: Record<string, string>): Promise<StoryPage>;
