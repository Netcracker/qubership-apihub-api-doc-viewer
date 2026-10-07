import { ElementHandle } from 'puppeteer';
export declare function captureScreenshot(domElement: ElementHandle): Promise<Uint8Array>;
export declare function host(): string;
