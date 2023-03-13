const OFF = 0;
const WARN = 1;
// const ERROR = 2;

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: { node: true },
  plugins: ["react", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  rules: {
    "import/exports-last": WARN,
    "import/order": [
      WARN,
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling"],
          "type",
        ],
        pathGroups: [{ pattern: "~/**", group: "internal" }],
        distinctGroup: false,
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          orderImportKind: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: false,
      },
    ],
    "react/react-in-jsx-scope": OFF,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    },
  ],
  settings: {
    "import/ignore": ["node_modules", "\\.(css|md|svg|json)$"],
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
      formComponents: ["Form"],
      linkComponents: [
        {
          name: "Link",
          linkAttribute: "to",
        },
        {
          name: "NavLink",
          linkAttribute: "to",
        },
      ],
    },
  },
};
