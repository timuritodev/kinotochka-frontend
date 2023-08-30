import { API_BASE_URL } from 'src/utils/constants';

const API_AUTH_URL = `${API_BASE_URL}/movies`;

const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		return Promise.reject(res);
	}
};

// const postData = (url: string, rate: any, token: string, method: string) => {
// 	return fetch(url, {
// 		method,
// 		headers: {
// 			'Content-Type': 'application/json',
// 			...(!!token && { Authorization: `Token ${token}` }),
// 		},
// 		...(!!rate && { body: JSON.stringify({ rate }) }),
// 	});
// };

// export const postRating = (
// 	id: number,
// 	rate: any,
// 	token: string,
// 	method: string
// ): Promise<IRating> => {
// 	console.log(method)
// 	return postData(`${API_AUTH_URL}/${id}/rate/`, rate, token, method).then((res) =>
// 		checkRes(res)
// 	);
// };

export const fetchData = (
	url: string,
	method: string,
	rate: any,
	token: string
) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(!!token && { Authorization: `Token ${token}` }),
		},
		...(!!rate && { body: JSON.stringify(rate) }),
	}).then((res) => checkRes(res));
};

export const fetchSetRating = (id: number, rate: any, token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/rate/`, 'POST', rate, token);
};

export const fetchUpdateRating = (id: number, rate: any, token: string): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/movies/${id}/rate/`, 'PUT', rate, token);
};
