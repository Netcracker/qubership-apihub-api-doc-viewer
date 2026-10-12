import { ElementHandle } from 'puppeteer';
import { ViewComponent } from '../view-component';
export declare class ViewComponentImpl implements ViewComponent {
    private readonly _domElement;
    constructor(_domElement: ElementHandle);
    captureScreenshot(): Promise<Uint8Array>;
}
