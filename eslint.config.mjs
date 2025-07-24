import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
		rules: {
			'semi': ['error', 'always'],
			'quotes': ['error', 'single'],
			'brace-style': 'error',
			'indent': ['error', 'tab'],
			'quote-props': ['error', 'consistent-as-needed'],
			'lines-around-comment': [
				'error', {
					allowClassStart: true,
					beforeBlockComment: true,
					beforeLineComment: true,
					allowBlockStart: true,
					allowObjectStart: true,
				},
			],
			'object-curly-spacing': [
				'error', 'always', {
					arraysInObjects: false,
					objectsInObjects: false,
				},
			],
			'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
			'object-curly-newline': [
				'error', {
					ObjectExpression: { multiline: true, minProperties: 3 },
					ObjectPattern: { multiline: true, minProperties: 3 },
					ImportDeclaration: { multiline: true, minProperties: 4 },
					ExportDeclaration: { multiline: true, minProperties: 3 },
				},
			],
			'comma-spacing': ['error', { before: false, after: true }],
			'key-spacing': ['error', { mode: 'strict' }],
			'keyword-spacing': ['error', { after: true, before: true }],
			'space-before-function-paren': ['error', 'never'],
			'implicit-arrow-linebreak': ['error', 'beside'],
			'multiline-comment-style': ['error', 'starred-block'],
			'array-bracket-newline': ['error', { multiline: true, minItems: 4 }],
			'no-trailing-spaces': ['error', { skipBlankLines: true }],
			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'arrow-parens': 0,
			'max-len': 'off',
			'semi-spacing': 'error',
			'comma-dangle': ['error', 'always-multiline'],
			'no-extra-semi': 'error',
			'no-multi-spaces': 'error',
			'no-floating-decimal': 'error',
			'no-confusing-arrow': 'error',
			'block-spacing': 'error',
			'space-infix-ops': 'error',
			'new-parens': 'error',
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-useless-catch': 'off',
			'nonblock-statement-body-position': ['error', 'beside'],
			'@next/next/no-img-element': 'off',
			'@next/next/no-html-link-for-pages': 'warn',
		},
	}),
];
export default eslintConfig;
