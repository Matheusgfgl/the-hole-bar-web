import axios from 'axios'
import { i18n } from '@/config/i18n'

// Common
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common.Accept = 'application/json'

// The Hole API
const theHoleApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Accept-Language': `${i18n.global.locale.value}`,
  },
  // timeout: 30000,
})

// --- Export
export {
  theHoleApi,
}
