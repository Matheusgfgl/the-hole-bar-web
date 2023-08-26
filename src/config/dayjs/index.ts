import type { App } from 'vue'
import dayjs from 'dayjs'

// Plugins
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import UpdateLocale from 'dayjs/plugin/updateLocale'
import localeData from 'dayjs/plugin/localeData'
import utc from 'dayjs/plugin/utc'

// Locale
import 'dayjs/locale/pt-br'
import 'dayjs/locale/en'
import 'dayjs/locale/en-gb'
import 'dayjs/locale/es'

// Extends
dayjs.extend(customParseFormat)
dayjs.extend(LocalizedFormat)
dayjs.extend(localeData)
dayjs.extend(UpdateLocale)
dayjs.extend(utc)

// Configs
const browserLocale = sessionStorage.getItem('locale') || window.navigator.language

dayjs.locale(browserLocale)

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}

export default {
  install(app: App) {
    /*eslint no-param-reassign: "error"*/
    app.config.globalProperties.$dayjs = dayjs
  },
}
