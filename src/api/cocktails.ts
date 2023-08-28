import { theHoleApi } from '@/config/axios/index'

export default {
  getCocktailCategories() {
    return theHoleApi({
      method: 'GET',
      url: '/list.php?c=list',
    })
  },

  getCocktails(category: string) {
    return theHoleApi({
      method: 'GET',
      url: `/filter.php?c=${category}`,
    })
  },

  getCocktailDetails(id: number) {
    return theHoleApi({
      method: 'GET',
      url: `/lookup.php?i=${id}`,
    })
  },

  searchCocktails(search: string) {
    return theHoleApi({
      method: 'GET',
      url: `/search.php?s=${search}`,
    })
  },
}
