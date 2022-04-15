import Plugin from './Plugin'

/**
 * Handles a single plugin
 */
export default class ChatbotPlugin extends Plugin {
  /**
   * Returns the list of enabled features by this plugin.
   * Can be : 'chatbot', 'applications'
   *
   * @returns string[]
   */
  getFeatures () {
    return ['chatbot']
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
}
