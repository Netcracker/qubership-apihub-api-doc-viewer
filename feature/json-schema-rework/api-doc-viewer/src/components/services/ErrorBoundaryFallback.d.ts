import { FC } from '../../../../../node_modules/react';
import { ErrorBoundaryCaughtError } from './ErrorBoundary';
type ErrorBoundaryFallbackProps = {
    componentName: string;
    /**
     * Real error caught by `ErrorBoundary` (pass the fallback as a render function). When set,
     * detailed diagnostics are printed via `console.error` (stderr under Node / Jest / Puppeteer).
     */
    caught?: ErrorBoundaryCaughtError;
};
export declare const ErrorBoundaryFallback: FC<ErrorBoundaryFallbackProps>;
export {};
