import { IFavorites } from "src/types/Favorites.types";


const API_URL = 'http://kinotochka.acceleratorpracticum.ru/api';

const checkRes = (res: Response) => {
 if (res.ok) {
  return res.json();
 } else {
  return Promise.reject(res);
 }
};

const postData = (url: string) => {
 return fetch(url, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
 }).then((res) => checkRes(res));
};

const deleteData = (url: string) => {
 return fetch(url, {
  method: 'DELETE',
  headers: {
   'Content-Type': 'application/json',
  },
 }).then((res) => checkRes(res));
};

const fetchData = (url: string) => {
 return fetch(url, {
  method: 'GET',
  headers: {
   'Content-Type': 'application/json',
  },
 }).then((res) => checkRes(res));
};

export const getFavorites = (): Promise<IFavorites> => {
 return fetchData(`${API_URL}/v1/movies/favorite}`);
};

export const addToFavorites = (filmId: number): Promise<IFavorites> => {
 return postData(`${API_URL}/v1/movies/${filmId}/favorite}`);
};

export const deleteFromFavorites = (filmId: number): Promise<IFavorites> => {
 return deleteData(`${API_URL}/v1/movies/${filmId}/favorite}`);
};
