
export interface ICocktails {
  idDrink: number
  strDrink: string
  strDrinkThumb: string
}

export interface ICocktailDetails {
  idDrink: number,
  strDrink: string,
  strDrinkAlternate: string,
  strTags: string,
  strVideo: null,
  strCategory: string,
  strIBA: string,
  strAlcoholic: string,
  strGlass: string,
  strInstructions: string,
  strDrinkThumb: string,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string,
  strMeasure1: string,
  strMeasure2: string,
}
export interface ICategories {
  strCategory: string,
}


export const getEmptyCocktails = (): ICocktails => ({
  idDrink: 0,
  strDrink: '',
  strDrinkThumb: '',
})
