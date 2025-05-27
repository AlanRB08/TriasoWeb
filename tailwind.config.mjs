/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors : {
            'blue-main' : '#14427C', // Azul de fondos y cards
            'blue_bg2' : '#0044A4', // Azul de fondos y cards 2
            'red_bg' : '#CA1C1C', // Rojo de botones e iconos
            'gris_titulos': '#393939', // Gris obscuro para titulos 
            'verde_whats': '#128c7e' , // Verde de whatshapp
            'gris_text' : '#737373', // Gris para menu
            'bg_main' : '#f4f5f6',
        },
        fontFamily : {
            sans: [
                'Helvetica', 
                'Arial', 
                'sans-serif', // Fallback genérico
              ],
        }
      },
    },
    plugins: [],
  };