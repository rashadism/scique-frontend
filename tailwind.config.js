/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0AC1C1",
				success: "#56ebcd",
				warning: "#e83040",
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
