import type { AxiosError } from 'axios';
import axios from 'axios';

export const parseAxiosError = (error: unknown | AxiosError): string => {
  if (!axios.isAxiosError(error)) return 'Something happened';
  if (error.response?.data) return JSON.stringify(error.response.data);

  return 'Something happened';
};

export const filterByNome = (value: string, query: string, item: any) => {
	const name = item.value.nome?.toLowerCase();
	const searchText = query.toLowerCase();

	return name.indexOf(searchText) > -1;
};
