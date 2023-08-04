import { IFilmsOne } from 'src/types/OneFilm.types';

const API_URL = 'http://kinotochka.acceleratorpracticum.ru/api';

const checkRes = (res: Response) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(res);
	}
};

const fetchData = (url: string) => {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => checkRes(res));
};

export const getFilmsMoviePage = (): Promise<IFilmsOne> => {
	return fetchData(`${API_URL}/v1/movies/20`);
};
