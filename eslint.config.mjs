// @ts-check

import tseslint from "typescript-eslint"
import nextPlugin from "@next/eslint-plugin-next"
import prettierConfig from "eslint-config-prettier"
// @ts-ignore
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"
import eslint from "@eslint/js"

export default tseslint.config(
  {
    name: "ignore",
    ignores: [".next/", "build/", ".*", "*.config.{js,mjs}"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/consistent-type-exports": "warn",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
    },
  },
  {
    name: "disableTypeChecked",
    files: ["src/**/*.js", "src/**/*.jsx"],
    // @ts-ignore
    rules: {
      ...tseslint.configs.disableTypeChecked,
    },
  },
  {
    name: "react",
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...nextPlugin.configs.recommended.rules,
      "react/button-has-type": "warn",
      "react/checked-requires-onchange-or-readonly": "warn",
      "react/jsx-key": "error",
      "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/self-closing-comp": "warn",

      // TypeError: context.getSource is not a function のエラーが出るため一時的にoff
      "react/jsx-no-constructed-context-values": "off",
      "@next/next/no-duplicate-head": "off",
    },
  },
  {
    name: "import",
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    name: "unused-import",
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
    },
  },
  {
    name: "prettier",
    rules: {
      ...prettierConfig.rules,
    },
  },
)
