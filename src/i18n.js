import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About'
  },
  es: {
    search: 'Busqueda',
    about: 'Nosotros'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
