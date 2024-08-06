/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
			},
			colors: {
				primary: '#022350',
				blue: {
					400: '#025DFC',
				},
				gray: {
					50: '#9DADBD',
					100: '#c5bebf',
					200: '#d9dbdb',
					400: '#a9a9a9',
					500: '#505050',
					600: '#777',
					700: '#404040',
					800: '#3A4856',
				},
				orange: {
					400: '#FF6D01',
					500: '#FF7815',
				},
				green: {
					600: '#417100',
				},
				neutral: {
					300: '#F2F4F4',
				},
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
