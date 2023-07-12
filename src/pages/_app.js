import "bootstrap/dist/css/bootstrap.min.css";
import 'react-quill/dist/quill.snow.css'
import '@/styles/globals.css'
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { Navbar, Footer } from '../components'
// Import translations
import translationEN from '../../public/locales/en/common.json';
import translationFR from '../../public/locales/fr/common.json';
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { parseCookies, setCookie } from 'nookies';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/logo.png'
import Head from 'next/head'
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('fr'), // set the default language here
  init: () => { },
  cacheUserLanguage: () => { },
};
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });
function App({ Component, pageProps }) {
  useEffect(() => {
    const selectedLanguage = Cookies.get('selectedLanguage');
    i18n.changeLanguage(selectedLanguage || 'fr');
    console.log(i18n.language)
    const cookies = parseCookies();
    if (!cookies.isadmin) {
      setCookie(null, 'isadmin', 'false', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="../assets/logo.png" />
        <title>ETM Holding</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default appWithTranslation(App)