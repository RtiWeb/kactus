const Disable = false

/**
 * Enables the application to opt-in for preview features based on runtime
 * checks. This is backed by the KACTUS_PREVIEW_FEATURES environment
 * variable, which is checked for non-development environments.
 */
function enableDevelopmentFeatures(): boolean {
  if (Disable) {
    return false
  }

  if (__DEV__) {
    return true
  }

  if (process.env.KACTUS_PREVIEW_FEATURES) {
    return true
  }

  return false
}

/** Should the app enable beta features? */
function enableBetaFeatures(): boolean {
  return enableDevelopmentFeatures() || __RELEASE_CHANNEL__ === 'beta'
}

/** Should the new Compare view be enabled? */
export function enableCompareBranch(): boolean {
  return enableBetaFeatures()
}

/** Should PR integration be enabled? */
export function enablePRIntegration(): boolean {
  return true
}

/** Should merge tool integration be enabled? */
export function enableMergeTool(): boolean {
  return enableDevelopmentFeatures()
}
