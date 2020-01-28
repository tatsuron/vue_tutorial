import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/ja.json'
import axios from 'axios'

Vue.use(VueI18n)

export default class I18nSetup {

  public i18n: any
  private loadedLanguages = ['ja'] // our default language that is preloaded

  constructor(lang: string = 'ja') {
    this.i18n = new VueI18n({
      locale: 'ja',
      messages,
    })

  }

  private setI18nLanguage(lang: string) {
    var eventElement: HTMLElement

    this.i18n.locale = lang
    axios.defaults.headers.common['Accept-Language'] = lang
    eventElement = <HTMLElement>document.querySelector('html')
    eventElement.setAttribute('lang', lang)

    return lang
  }

  public async loadLanguageAsync(lang: string) {
    // If the same language
    if (this.i18n.locale === lang) {
      console.log('the same language')
      return Promise.resolve(this.setI18nLanguage(lang))
    }

    // If the language was already loaded
    if (this.loadedLanguages.includes(lang)) {
      console.log('the language was already loaded')
      return Promise.resolve(this.setI18nLanguage(lang))
    }

    // If the language hasn't benn loaded yet
    const loadLanguageJson = await import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`)
    console.log(loadLanguageJson)
    this.i18n.setLocaleMessage(lang, loadLanguageJson.default)
    this.loadedLanguages.push(lang)
    return this.setI18nLanguage(lang)
  }

}

