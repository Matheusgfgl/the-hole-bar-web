import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ICocktails }  from '@/api/interface/ICocktail'

export const useCDBFormStore = defineStore('cocktailsStore', () => {
  const cocktails = ref([] as ICocktails[]);


  return {
    cocktails,
  };
},
{
  persist: {
    storage: localStorage, // data in localStorage
  },
})
