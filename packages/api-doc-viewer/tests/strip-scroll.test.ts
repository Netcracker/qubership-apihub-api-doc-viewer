import { resolveStripScrollState, resolveStripScrollTarget } from "../src/utils/common/strip-scroll"

const items = [
  { left: 0, width: 100 },
  { left: 108, width: 100 },
  { left: 216, width: 100 },
  { left: 324, width: 100 },
]

describe("strip-scroll", () => {
  it("disables the left arrow at the left edge and the right one at the right edge", () => {
    expect(resolveStripScrollState(0, 250, 424)).toEqual({ canScrollLeft: false, canScrollRight: true })
    expect(resolveStripScrollState(174, 250, 424)).toEqual({ canScrollLeft: true, canScrollRight: false })
    expect(resolveStripScrollState(0, 500, 424)).toEqual({ canScrollLeft: false, canScrollRight: false })
  })

  it("scrolls right by exactly one option: the first cut option is aligned to the right edge", () => {
    expect(resolveStripScrollTarget(items, 0, 250, "right")).toBe(66)
    expect(resolveStripScrollTarget(items, 66, 250, "right")).toBe(174)
    expect(resolveStripScrollTarget(items, 174, 250, "right")).toBeUndefined()
  })

  it("scrolls left by exactly one option: the last cut option is aligned to the left edge", () => {
    expect(resolveStripScrollTarget(items, 174, 250, "left")).toBe(108)
    expect(resolveStripScrollTarget(items, 108, 250, "left")).toBe(0)
    expect(resolveStripScrollTarget(items, 0, 250, "left")).toBeUndefined()
  })

  it("aligns an option wider than the strip to its start", () => {
    expect(resolveStripScrollTarget([{ left: 0, width: 50 }, { left: 58, width: 400 }], 0, 200, "right")).toBe(58)
  })
})
