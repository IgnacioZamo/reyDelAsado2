/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  extend: {
      colors: {
		reydelasado:{
			'reyda-headerFooter': '#212529',
			'reyda-body': '#F5F5DC'
		}
      },
      fontFamily:{
				"index-centro":['Agbalumo'],
        "menu":['Playfair Display']
			}
    },
},
  plugins: []
};