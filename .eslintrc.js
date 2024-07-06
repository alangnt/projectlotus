module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'next',
        'next/core-web-vitals',
        'prettier',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
}
