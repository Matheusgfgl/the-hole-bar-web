import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IStoreResponse } from '../api/interface/responses/StoreResponse';
import type { ICocktails, ICategories, ICocktailDetails } from '../api/interface/ICocktail';
import { parseAxiosError } from '../utils/Helpers';

import cocktailsApi from '../api/cocktails'
// import type { AxiosError } from 'axios';

export const useCocktailsStore = defineStore('cocktailsStore', () => {
  const categories = ref([] as ICategories[]);
  const cocktails = ref([] as ICocktails[]);
  const cocktail = ref({} as ICocktailDetails);

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

  const getCocktailDetails = async (id: number): Promise<IStoreResponse> => {
    try {
      const response = await cocktailsApi.getCocktailDetails(id);

      cocktail.value = response.data.drinks[0] as ICocktailDetails;

    } catch (e: unknown) {
      return Promise.reject({ result: 'error', error: parseAxiosError(e) });
    }
  };

  return {
    cocktails,
    cocktail,
    categories,
    getCategories,
    getCocktails,
    getCocktailDetails,
  };
},
{
  persist: {
    storage: localStorage, // data in localStorage
  },
})
