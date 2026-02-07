import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49'
				},
				gray: {
					50: 'var(--color-gray-50, #f8fafc)',
					100: 'var(--color-gray-100, #f1f5f9)',
					200: 'var(--color-gray-200, #e2e8f0)',
					300: 'var(--color-gray-300, #cbd5e1)',
					400: 'var(--color-gray-400, #94a3b8)',
					500: 'var(--color-gray-500, #64748b)',
					600: 'var(--color-gray-600, #475569)',
					700: 'var(--color-gray-700, #334155)',
					800: 'var(--color-gray-800, #1e293b)',
					850: 'var(--color-gray-850, #1a2332)',
					900: 'var(--color-gray-900, #0f172a)',
					950: 'var(--color-gray-950, #020617)'
				},
				background: '#ffffff',
				surface: '#f8fafc',
				border: '#e2e8f0'
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			},
			transitionProperty: {
				width: 'width'
			}
		}
	},
	plugins: [typography, containerQueries]
};
