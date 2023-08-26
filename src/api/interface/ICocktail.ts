
export interface ICocktails {
  id: number
  nome: string
  detalhes: string
  flagAtivo: boolean | string
  images: Array<IImage>
}

interface IImage {
  descricao: string
  src: string
  type: string
  file: File
}

export const getEmptyCocktails = (): ICocktails => {
  const Cocktails = {
    //
  }

  return Cocktails
}
