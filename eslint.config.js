import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // Disable formatting rules that conflict with Prettier
  prettier,

  // Environment globals
  {
    languageOptions: {
      globals: {
        ...js.environments.node.globals,
        ...js.environments.es6.globals,
      },
    },
  },
];
