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
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],

  // Parser
  // ====================================================================
  // Typescript parser
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  // Plugins
  // ====================================================================
  plugins: ["react"],

  // Rules Config
  rules: {
    "no-console": "error",
  },
};
