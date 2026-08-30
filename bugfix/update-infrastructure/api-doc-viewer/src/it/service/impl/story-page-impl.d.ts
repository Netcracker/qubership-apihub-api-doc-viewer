import { ElementHandle, NodeFor, Page, WaitForSelectorOptions } from 'puppeteer';
import { StoryPage } from '../story-page';
import { ViewComponent } from '../view-component';
interface SelectorLookup {
    waitForSelector<Selector extends string>(selector: Selector, options?: WaitForSelectorOptions): Promise<ElementHandle<NodeFor<Selector>> | null>;
}
export declare class StoryPageImpl implements StoryPage {
    private readonly _page;
    private readonly _root;
    constructor(_page: Page, _root: SelectorLookup);
    viewComponent(): Promise<ViewComponent>;
}
export {};
