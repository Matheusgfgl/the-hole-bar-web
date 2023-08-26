import cloneDeep from 'lodash.clonedeep'
import { getActivePinia } from 'pinia'


export function useResetStore() {
  // eslint-disable-next-line no-underscore-dangle
  getActivePinia()._s.forEach(store => store.$reset())
}

export function resetStore({ store }) {
  const initialState = cloneDeep(store.$state)

  // eslint-disable-next-line no-param-reassign
  store.$reset = () => store.$patch(cloneDeep(initialState))
}
