import { Component, PropsWithChildren, ReactNode } from '../../../../../node_modules/react';
type ErrorBoundaryProps = {
    fallback?: ReactNode;
} & PropsWithChildren;
type ErrorBoundaryState = {
    hasError: boolean;
};
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: any, info: any): void;
    render(): ReactNode;
}
export {};
