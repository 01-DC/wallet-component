/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				3.5: "14px",
				4.5: "18px",
				7.5: "30px",
			},
		},
	},
	plugins: [],
}
