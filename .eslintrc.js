module.exports = {
  // Settings detect react version
  // ====================================================================
  settings: {
    react: {
      version: "detect",
    },
  },

  // Environment
  // ====================================================================
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // Extends
  // ====================================================================
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
  ],

  // Parser
  // ====================================================================
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  // Plugins
  // ====================================================================
  plugins: [
    "react",
    "jsx-a11y",
    "react-hooks",
    "import",
    "prettier",
    "@typescript-eslint",
  ],

  // Rules Config
  rules: {
    "no-console": "error",
  },
};
