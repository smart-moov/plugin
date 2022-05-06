import ChatbotPlugin from './ChatbotPlugin'
import ApplicationsPlugin from './ApplicationsPlugin'
import aggregation from './aggregation'

/**
 * Handles a single plugin
 */
export default class ApplicationsWithChatbotPlugin extends aggregation(
  ChatbotPlugin,
  ApplicationsPlugin
) {
  /**
   * Returns the list of enabled features by this plugin.
   * Can be : 'chatbot', 'applications'
   *
   * @returns string[]
   */
  getFeatures () {
    return ['applications', 'chatbot']
  }
}
