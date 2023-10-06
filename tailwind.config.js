/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0AC1C1",
				black: "#252422",
				ash: "#93BFBF",
				smudge: "#D9D9D9",
				secondary: "#2F4C73",
			},
		},
	},
	plugins: [],
};
