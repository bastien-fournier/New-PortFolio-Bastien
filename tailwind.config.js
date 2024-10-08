export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5", // Définir une couleur primaire personnalisée
        secondary: "#FDC435",
        colorwhite: "#FFFFFF", // Définir une couleur secondaire personnalisée
        colorblack: "#000000", // Vous pouvez ajouter d'autres couleurs personnalisées ici si nécessaire
      },
      fontFamily: {
        nunito: ['"Nunito-Regular.ttf"', "sans-serif"], // Définir une police de caractères personnalisée
        playfair: ['"PlayfairDisplay-Regular.ttf"', "sans-serif"],
        roboto: ['"Roboto-Regular.ttf"', "sans-serif"],
        // Vous pouvez ajouter d'autres polices personnalisées ici si nécessaire
      },
    },
  },
  plugins: [],
};
