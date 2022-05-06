import Plugin from './Plugin'

/**
 * Handles a single plugin
 */
export default class ApplicationsWithChatbotPlugin extends Plugin {
  /**
   * Returns the list of enabled features by this plugin.
   * Can be : 'chatbot', 'applications'
   *
   * @returns string[]
   */
  getFeatures () {
    return ['applications', 'chatbot']
  }

  /**
   * Returns the campaign configuration for ATS synchronization
   * @returns object
   */
  getApplicationsCampaignConfiguration () {
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
   * Add one steps. The step is an object with keys :
   *
   * - id: Step ID
   * - name: Step name, string or I18N object (language: name)
   * - category: 'messages', 'questions' or 'controls'
   * - icon: Font Awesome icon name, or datauri, or URL, ex: 'comment-alt'
   * - default: object with default configuration
   *
   * @returns Array
   */
  getChatbotStepConfiguration () {
    return {}
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
   * Returns autocomplete for configuration
   *
   * @param {string} query Query string
   * @param {object} ctx Context
   */
  async autocomplete (query, ctx) {
    return []
  }
}
