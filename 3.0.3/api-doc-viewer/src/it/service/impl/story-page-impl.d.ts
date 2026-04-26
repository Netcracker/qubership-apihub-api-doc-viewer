/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
