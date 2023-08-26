
export interface ICocktails {
  idDrink: number
  strDrink: string
  strDrinkThumb: string
}

export interface ICategories {
  strCategory: string,
}


export const getEmptyCocktails = (): ICocktails => ({
  idDrink: 0,
  strDrink: '',
  strDrinkThumb: '',
})
