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
/** Waits for an optional viewer selector (compatibility-suite generated ITs pass one per spec type). */
export declare function waitForVisibleSelector(page: Page, selector: string | undefined): Promise<void>;
