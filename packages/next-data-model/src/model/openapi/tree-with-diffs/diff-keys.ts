/**
 * Synthetic field diff on the `security` node: present when any alternative (security toolbar
 * option) was wholly added or removed; its type is the strongest of those changes.
 * Written by the with-diffs transformer, read by the toolbar row accessor and severities.
 */
export const OPENAPI_SECURITY_ALTERNATIVES_DIFF_KEY = 'alternatives'
