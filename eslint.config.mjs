import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        ignores: ['dist'],
        extends: [
            pluginJs.configs.recommended,
            eslintPluginPrettierRecommended,
            ...tseslint.configs.recommended,
        ],
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.node, ecmaVersion: 2022 },
        plugins: {
            prettier,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'prettier/prettier': 'error',
            'max-len': [
                'error',
                {
                    code: 88,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreComments: true,
                    ignoreRegExpLiterals: true,
                },
            ],
        },
    },
);
