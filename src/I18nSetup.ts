import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/ja.json'
import axios from 'axios'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ja',
  messages,
})

export default i18n

const loadedLanguages = ['ja'] // our default language that is preloaded

function setI18nLanguage(lang: string) {
  var eventElement: HTMLElement

  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  eventElement = <HTMLElement>document.querySelector('html')
  eventElement.setAttribute('lang', lang)

  return lang
}

export function loadLanguageAsync(lang: string) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default[`${lang}`])
      loadedLanguages.push(lang)
      console.log(i18n)
      return setI18nLanguage(lang)
    }
  )
}

