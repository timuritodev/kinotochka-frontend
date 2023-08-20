import { IRating } from 'src/types/Rating.types';
import { API_BASE_URL } from 'src/utils/constants';
import { token } from 'src/utils/constants';


const API_AUTH_URL = `${API_BASE_URL}/movies`;

const checkRes = (res: Response) => {
	if (res.ok) {

		return res;
	} else {
		return Promise.reject(res);
	}
};


const postData = (
	url: string,
	rate: number
) => {
	console.log({ rate })
	return fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Autorization': `${token}`,
			
		},
		...({ body: JSON.stringify({ rate }) }),
	}).then((res) => checkRes(res));
};

export const postRating = (id: any, rate: any): Promise<Response> => {
	console.log(id)
	return postData(`${API_AUTH_URL}/${id}/rate`, rate).then((res) => checkRes(res));
};



