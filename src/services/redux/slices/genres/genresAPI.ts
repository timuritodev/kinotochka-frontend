import { IGenres } from 'src/types/Genres.types';

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

export const getGenres = (): Promise<Array<IGenres>> => {
	console.log(fetchData(`${API_URL}/v1/genres/`));
	return fetchData(`${API_URL}/v1/genres/`);
};

/*import { IGenres } from 'src/types/Genres.types';

export const getGenres = (): IGenres[] => {
    // return fetchData(`${API_URL}/signin`, data);

    const mymovie: IGenres[] = [
        {
            name: 'хоррор',
            whiteImg: 'https://cdn-icons-png.flaticon.com/512/149/149452.png'
        }
    ]
    
    return mymovie;
};*/
