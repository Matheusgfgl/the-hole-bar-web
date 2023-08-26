import axios from 'axios'

// Common
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common.Accept = 'application/json'

// The Hole API
const theHoleApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // timeout: 30000,
})

// --- Export
export {
  theHoleApi,
}
