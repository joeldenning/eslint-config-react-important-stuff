module.exports = {
  "extends": [
    "plugin:jsx-a11y/recommended",
    "important-stuff",
  ],

  "plugins": [
    "react-hooks",
    "jsx-a11y",
  ],

  "settings": {
    "react": {
      "version": "detect"
    },
  },

  "env": {
    "es6": true,
  },

  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // jsx-a11y rules
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-onchange": "off",
  },
}