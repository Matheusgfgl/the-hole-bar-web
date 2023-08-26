import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IStoreResponse } from '../api/interface/responses/StoreResponse';
import type { ICocktails, ICategories } from '../api/interface/ICocktail';
import { parseAxiosError } from '../utils/Helpers';

import cocktailsApi from '../api/cocktails'
// import type { AxiosError } from 'axios';

export const useCocktailsStore = defineStore('cocktailsStore', () => {
  const categories = ref([] as ICategories[]);
  const cocktails = ref([] as ICocktails[]);

  const getCategories = async (): Promise<IStoreResponse> => {
    try {
      const response  = await cocktailsApi.getCocktailCategories()

      categories.value = response.data.drinks as ICategories[]

      return Promise.resolve({ result: 'ok' });

    } catch (e: unknown ) {
      return Promise.reject({ result: 'error', error: parseAxiosError(e) });
    }
  };

  const getCocktails = async (category: string): Promise<IStoreResponse> => {
    try {
      const response = await cocktailsApi.getCocktails(category)

      cocktails.value = response.data.drinks as ICocktails[]


      return Promise.resolve({ result: 'ok' });

    } catch (e: unknown) {
      return Promise.reject({ result: 'error', error: parseAxiosError(e) });
    }
  };


  return {
    cocktails,
    categories,
    getCategories,
    getCocktails,
  };
},
{
  persist: {
    storage: localStorage, // data in localStorage
  },
})
