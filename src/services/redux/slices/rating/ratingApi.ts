import { IRating } from 'src/types/Rating.types';
import { API_BASE_URL } from 'src/utils/constants';

const API_AUTH_URL = `${API_BASE_URL}/movies`;

const checkRes = (res: Response) => {
	if (res.ok) {
		return res;
	} else {
		console.log(res);
		return Promise.reject(res);
	}
};

const postData = (url: string, rate: any, token: string) => {
	return fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			...(!!token && { Authorization: `Token ${token}` }),
		},
		...(!!rate && { body: JSON.stringify({ rate }) }),
		//({!!rate &&body: JSON.stringify({ rate }) }),
	});
};

export const postRating = (
	id: number,
	rate: any,
	token: string
): Promise<Response> => {
	console.log(id)
	return postData(`${API_AUTH_URL}/${id}/rate/`, rate, token).then((res) =>
		checkRes(res)
	);
};
