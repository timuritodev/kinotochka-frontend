import { IRating } from 'src/types/Rating.types';
import { API_BASE_URL } from 'src/utils/constants';


const API_AUTH_URL = `${API_BASE_URL}/movies`;
const token = localStorage.getItem('token');

const checkRes = (res: Response) => {
	if (res.ok) {
		console.log('ok');
		return res;
	} else {
		
		return Promise.reject(res);
	}
};


const postData = (
	url: string,
	rate?: number
) => {
	console.log({ rate })
	console.log(token)
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Autorization': `Token ${token}`,
			
		},
		...(!!rate && { body: JSON.stringify({ rate }) }),
		//({!!rate &&body: JSON.stringify({ rate }) }),
	}).then((res) => checkRes(res));
};

export const postRating = (id: any, rate: any): Promise<Response> => {

	return postData(`${API_AUTH_URL}/${id}/rate`, rate).then((res) => checkRes(res));
};



