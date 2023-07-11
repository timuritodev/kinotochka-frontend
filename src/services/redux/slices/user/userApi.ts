import { IData, IUser } from './user';

const API_URL = 'http://127.0.0.1:3000';

const checkRes = (res: Response) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(res);
	}
};

const fetchData = (url: string, data?: IData) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		...(!!data && { body: JSON.stringify(data) }),
	}).then((res) => checkRes(res));
};

export const fetchSignIn = (data: IData): IUser => {
	// return fetchData(`${API_URL}/signin`, data);

	console.log(`fetchSignIn success, data: ${data}`);
	return {
		email: '123@mail.ru',
		preferences: ['драма', 'комедия', 'мультфильмы'],
	};
};

export const fetchSignUp = (data: IData): IUser => {
	// return fetchData(`${API_URL}/signup`, data);

	console.log(`fetchSignUp success, data: ${data}`);
	return {
		email: '123@mail.ru',
		preferences: ['драма', 'комедия', 'мультфильмы'],
	};
};
