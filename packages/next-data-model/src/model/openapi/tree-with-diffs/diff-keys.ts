/**
 * Synthetic field diff on the `security` node: present when any alternative (security toolbar
 * option) was wholly added or removed; its type is the strongest of those changes.
 * Written by the with-diffs transformer, read by the toolbar row accessor and severities.
 */
export const OPENAPI_SECURITY_ALTERNATIVES_DIFF_KEY = 'alternatives'

/**
 * Synthetic field diff of the Body header row (on the `requestBody` node for the request Body, on
 * the `content` node for a response Body): present when any media-type option was wholly added,
 * removed or renamed; its type is the strongest of those changes.
 * Written by the with-diffs transformer, read by the Body header row accessors and severities.
 */
export const OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY = 'mediaTypes'

/**
 * Synthetic field diff on the `responses` node: present when any response-code option was wholly
 * added, removed or renamed; its type is the strongest of those changes.
 * Written by the with-diffs transformer, read by the Responses title row accessor and severities.
 */
export const OPENAPI_RESPONSE_OPTIONS_DIFF_KEY = 'codes'
