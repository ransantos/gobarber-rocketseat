module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "eslint quotes": ["error", "single"],
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
