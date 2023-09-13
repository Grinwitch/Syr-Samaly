import { createI18n } from 'vue-i18n'
import kz from './locales/kz.json';
import ru from './locales/ru.json';

export const languages = {
  ru: ru,
  kz: kz,
}

export default createI18n({
  legacy: false,
  locale: 'ru',
  messages: Object.assign(languages)
})
