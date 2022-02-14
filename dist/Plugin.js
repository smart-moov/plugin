"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Handles a single plugin
 */
class Plugin {
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
  addChatbotSteps() {
    return [];
  }
  /**
   * Handles one step execution. Receives a context with control functions, execution data.
   * Saves the returned data as execution data.
   *
   * @param {string} id Step ID
   * @param {object} ctx Context
   * @returns mixed
   */


  handleChatbotStep(id, ctx) {
    return undefined;
  }
  /**
   * Returns the default configuration of this plugin
   *
   * @returns object
   */


  getDefaultConfiguration() {
    return {};
  }
  /**
   * Called when the plugin is installed on an organization.
   */


  onInstall(ctx) {
    return undefined;
  }
  /**
   * Called when the plugin is uninstalled from an organization.
   */


  onUninstall(ctx) {
    return undefined;
  }
  /**
   * Called when the plugin configuration is saved.
   */


  onSave(ctx) {
    return undefined;
  }

}

exports.default = Plugin;
//# sourceMappingURL=Plugin.js.map