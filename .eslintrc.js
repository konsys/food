{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2020": true,
    "jest": true,
    "serviceworker": true
  },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/all",
    "plugin:testing-library/react",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "root": true,
  "rules": {
    "camelcase": "error",
    "no-console": "warn"
  }
}