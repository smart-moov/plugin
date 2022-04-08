import Plugin from './Plugin'

/**
 * Handles a single plugin
 */
export default class ApplicationsPlugin extends Plugin {
  /**
   * Returns the list of enabled features by this plugin.
   * Can be : 'chatbot', 'applications'
   *
   * @returns string[]
   */
  getFeatures () {
    return ['applications']
  }

  /**
   * Handles a new application to an organization
   *
   * @param {object} application Application data
   */
  async handleApplication (application, ctx) {
    return
  }
}
