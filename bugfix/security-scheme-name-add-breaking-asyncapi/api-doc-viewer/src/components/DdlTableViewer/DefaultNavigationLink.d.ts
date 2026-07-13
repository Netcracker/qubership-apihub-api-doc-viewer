import type { FC, ReactNode } from '../../../../../node_modules/react';
export type NavigationLinkProps = {
    href: string;
    className?: string;
    children: ReactNode;
};
export type NavigationLinkComponent = FC<NavigationLinkProps>;
export declare const DefaultNavigationLink: NavigationLinkComponent;
