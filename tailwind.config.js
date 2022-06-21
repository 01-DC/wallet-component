/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				1.5: "6px",
				3.5: "14px",
				3.75: "15px",
				4.5: "18px",
				7.5: "30px",
			},
			borderRadius: {
				"4xl": "30px",
			},
		},
	},
	plugins: [],
}
