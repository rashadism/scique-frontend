/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0AC1C1",
				secondary: "#252422",
				accent: "#93BFBF",
				neutral: "#8EB1D9",
				base: "#2F4C73",
			},
			fontFamily: {
				display: ["Inter"],
			},
		},
	},
	plugins: [],
};
