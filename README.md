<h1 align="center">@smart-moov/plugin</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/@smart-moov/plugin.svg?orange=blue" />
  <a href="https://github.com/smart-moov/plugin/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Base ES6 classes to create Smart Moov plugins, to let you connect your product to our candidates.
>
> A Smart Moov plugin let you to create custom chatbot steps, and synchronize applications with your APIs.

## 🚀 Getting started

Create your repository, with public access, with a `index.js` file who exports an ES6 class extending our `Plugin` class.

```js
import { Plugin } from '@smart-moov/plugin'

export default class MyPlugin extends Plugin {}
```

> Note: No need to add a `package.json` file, the packages you call will be automatically installed at build time.

## ✅ Features

You can enable features for your plugin :

```js
export default class MyPlugin extends Plugin {
  getFeatures () {
    return ['chatbot', 'applications']
  }
}
```

- `chatbot`: Let the plugin add chatbot steps, to directly interact with the candidate.
- `applications`: Your plugin will be called whenever we receive an application from a candidate. This will let you send the application to an external API, etc

## 🤖 Chatbot integration

### Add custom steps to the editor

```js
export default class MyPlugin extends Plugin {
  addChatbotSteps () {
    return [
      {
        id: 'talk',
        name: {
          fr: 'Parler avec Dean',
          en: 'Talk with Dean'
        },
        category: 'messages',
        icon: 'comment-alt',
        configuration: {
          message: {
            type: 'text',
            i18n: true
          }
        }
      }
    ]
  }
}
```

More details soon.

### Handle custom steps

```js
export default class MyPlugin extends Plugin {
  handleChatbotStep (id, ctx) {
    return undefined
  }
}
```

More details soon.

## 🪝 Hooks

You can run methods on specific events :

```js
export default class MyPlugin extends Plugin {
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
```

More details soon.
