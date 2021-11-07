const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Quicksand', 'ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Maven Pro', 'ui-sans-serif', 'system-ui'],
			body: ['Quicksand', 'ui-sans-serif', 'system-ui']
		},
		extend: {
			colors: {
				background: {
					light: '#4C546F',
					dark: '#3E4253'
				},
				accent: '#EDAA6D'
			}
		}
	},

	plugins: []
};

module.exports = config;
