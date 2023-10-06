/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#eb5e28",
				black: "#252422",
				ash: "#403d39",
				smudge: "#ccc5b9",
				cream: "#fffcf2",
			},
		},
	},
	plugins: [],
};
