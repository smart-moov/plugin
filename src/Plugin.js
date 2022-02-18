/**
 * Handles a single plugin
 */
export default class Plugin {
  /**
   * Returns the list of enabled features by this plugin.
   * Can be : 'chatbot', 'applications'
   *
   * @returns string[]
   */
  getFeatures () {
    return []
  }

  /**
   * Add one or many steps. Each step contains an object with keys :
   *
   * - id: Step ID
   * - name: Step name, string or I18N object (language: name)
   * - category: 'messages', 'questions' or 'controls'
   * - icon: Font Awesome icon name, ex: 'comment-alt'
   * - default: object with default configuration
   *
   * @returns Array
   */
  addChatbotSteps () {
    return []
  }

  /**
   * Handles one step execution. Receives a context with control functions, execution data.
   *
   * @param {string} id Step ID
   * @param {mixed} conf Configuration of the step
   * @param {mixed} input Input data
   * @param {object} ctx Context
   */
  async executeChatbotStep (id, conf, input, ctx) {
    return
  }

  /**
   * Handles a new application to an organization
   *
   * @param {object} application Application data
   */
  async handleApplication (application, ctx) {
    return
  }

  /**
   * Returns the configuration fields of this plugin
   *
   * @returns object
   */
  getConfiguration () {
    return {}
  }

  /**
   * Called when the plugin is installed on an organization.
   */
  onInstall (ctx) {
    return undefined
  }

  /**
   * Called when the plugin is uninstalled from an organization.
   */
  onUninstall (ctx) {
    return undefined
  }

  /**
   * Called when the plugin configuration is saved.
   */
  onSave (ctx) {
    return undefined
  }
}
