type DdlApiLogMethod = (...args: unknown[]) => void

export type DdlApiLogger = {
  debug: DdlApiLogMethod
  info: DdlApiLogMethod
  warn: DdlApiLogMethod
  error: DdlApiLogMethod
}

const noop: DdlApiLogMethod = () => {}

export const createDdlApiLogger = (enabled = false): DdlApiLogger => {
  if (!enabled) {
    return {
      debug: noop,
      info: noop,
      warn: noop,
      error: noop,
    }
  }

  return {
    debug: (...args) => console.debug(...args),
    info: (...args) => console.info(...args),
    warn: (...args) => console.warn(...args),
    error: (...args) => console.error(...args),
  }
}
