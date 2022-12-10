module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'], createDefaultProgram: true },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    // '@typescript-eslint/strict-boolean-expressions': [
    //   2,
    //   {
    //     allowString: false,
    //     allowNumber: false,
    //   },
    // ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 0,
  },
  ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
}
