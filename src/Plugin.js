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
   * Returns the plugin name.
   *
   * @returns string
   */
  getName () {
    return 'Plugin name'
  }

  /**
   * Add one steps. The step is an object with keys :
   *
   * - id: Step ID
   * - name: Step name, string or I18N object (language: name)
   * - category: 'messages', 'questions' or 'controls'
   * - icon: Font Awesome icon name, ex: 'comment-alt'
   * - default: object with default configuration
   *
   * @returns Array
   */
  getChatbotStepConfiguration () {
    return []
  }

  /**
   * Returns an async function
   */
  getChatbotPublicPlugin () {
    return async ctx => {}
  }

  /**
   * Executes the private API endpoint of this plugin.
   *
   * @param {object} params Parameters sent by public plugin
   * @param {object} ctx Execution context
   * @returns
   */
  async executeChatbotPrivatePlugin (params, ctx) {
    return {}
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
