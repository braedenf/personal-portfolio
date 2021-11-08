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
					dark: '#3E4253',
					secondary: '#EDE5D5',
					'secondary-active': '#FFE4B0'
				},
				accent: '#EDAA6D',
				'accent-light': '#E9CBAF'
			}
		}
	},

	plugins: []
};

module.exports = config;
