// En tu archivo i18n.ts o i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // Establece el idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo si no se puede cargar el idioma predeterminado
  resources: {
    en: {
      translation: {
        greeting: "Hello",
        button: "Change Language",
        Home: "Home",
        Acerca: "About",
        Contact: "Contact",
        Registro: "Register",
      },
    },
    es: {
      translation: {
        greeting: "Hola",
        button: "Cambiar Idioma",
        Home: "Inicio",
        Acerca: "Acerca",
        Contact: "Contacto",
        Registro: "Registro",
      },
    },
  },
});

export default i18n;
