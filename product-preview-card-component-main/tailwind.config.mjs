/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				
				primary: {
					100:"#f2ebe3",
					200:"#3c8067"
				},
				neutral: {
					100:"#ffffff",
					200:"#6c7289",
					300:"#1c232b"
				}
			},
			font: {
				base:"14px"
			}
		},
	},
	plugins: [],
}
