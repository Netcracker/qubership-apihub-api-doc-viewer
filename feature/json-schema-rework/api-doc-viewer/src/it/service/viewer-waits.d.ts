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
import { Page } from 'puppeteer';
/**
 * Shared "ready for screenshot" waits for screenshot ITs. Hand-written and generated ITs import
 * these instead of declaring local copies (generators in `bin/` emit the import).
 */
export type JsonSchemaViewerWaitOptions = {
    /**
     * Switch oneOf/anyOf combiner nodes to the variant that contains the diff before capture.
     * Changes rendered content, so it is opt-in per suite (a no-op on pages without combiners).
     */
    switchCombinerVariant?: boolean;
};
/** Document loaded and two animation frames painted (layout settled after the last React commit). */
export declare function waitForRenderingComplete(page: Page): Promise<void>;
export declare function waitForJsonSchemaViewer(page: Page, options?: JsonSchemaViewerWaitOptions): Promise<void>;
export declare function waitForJsonSchemaDiffsViewer(page: Page, options?: JsonSchemaViewerWaitOptions): Promise<void>;
export declare function waitForDdlTableViewer(page: Page): Promise<void>;
export declare function waitForDdlTableDiffsViewer(page: Page): Promise<void>;
