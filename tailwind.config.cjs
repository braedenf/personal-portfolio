const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Lexend Deca', 'ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Lexend Deca', 'ui-sans-serif', 'system-ui'],
			body: ['Lexend Deca', 'ui-sans-serif', 'system-ui']
		},
		extend: {
			colors: {
				background: {
					light: '#3E5057',
					dark: '#19323C',
					secondary: '#EDE5D5',
					'secondary-active': '#FFE4B0',
					highlight: '#F2545B'
				},
				primary: '#FF737A',
				secondary: '#55F27D',
				'secondary-darker': '#3EB35B'
			}
		}
	},

	plugins: []
};

module.exports = config;
