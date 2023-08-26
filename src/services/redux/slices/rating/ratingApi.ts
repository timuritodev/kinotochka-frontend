import { IRating } from 'src/types/Rating.types';
import { API_BASE_URL } from 'src/utils/constants';

const API_AUTH_URL = `${API_BASE_URL}/movies`;


const checkRes = (res: Response) => {
	if (res.ok) {
		
		return res;
	} else {
		console.log(res)
		return Promise.reject(res);
	}
};

const postData = ( url: string, rate: any, token: string) => {
	console.log(rate)
	return fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'X-CSRFToken': '9rkggAooLARcnBYu3f1FKwSbXRsoANEulzzqtPau1YhsSlFQxdfZTATnHESwERsb',
			
			...(!!token && { Authorization: `Basic ${token}` }),
		},
		...(!!rate && { body: JSON.stringify({ rate }) }),
		//({!!rate &&body: JSON.stringify({ rate }) }),
	});
};

export const postRating = (id: number, rate: any , token: string ): Promise<Response> => {
	return postData(`${API_AUTH_URL}/${id}/rate`, rate,  token).then((res) =>
		
		checkRes(res)
	);
};
