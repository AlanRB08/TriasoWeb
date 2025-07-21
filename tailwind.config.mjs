/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors : {
          blueMain : 'var(--azul-bg1)', // Azul de fondos y cards
          blueMainTrans : 'var(--azul-tran)',
          blueMainHover : 'var(--azul-bg1Hover)', // Azul de fondos y cards
          blueSecondary : "var(--azul-bg2)", // Azul de fondos y cards 2
          redBg : 'var(--rojo-btn)', // Rojo de botones e iconos//
          redBgHover : 'var(--rojo-btnHover)', // Rojo de botones e iconos en HOVER //
          grisT: "var(--gris-titulos)", // Gris obscuro para titulos 
          grisP : 'var(--gris-textos)', // Gris para menu
          grisSubP : 'var(--gris-textos2)', //Gris para textos secundario //
          grisPP : 'var(--gris-textos3)', // Gris para menu //
          grisPPP : 'var(--gris-textos4)', // Gris para TEXTO //
          gris5 : 'var(--gris-textos5)', // Gris para TEXTO //
          verdeWhats: 'var(--verde-whats)' , // Verde de whatshapp
          bgMain : 'var(--bg-main)', // Fondo de la pagina
          bgFooter : 'var(--bg-footer)',//Fondo de Footer
          bgBeige : 'var(--bg-beige)',//Fondo de Footer
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