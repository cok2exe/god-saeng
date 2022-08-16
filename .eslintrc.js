module.exports = {
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
  },
  ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
}
