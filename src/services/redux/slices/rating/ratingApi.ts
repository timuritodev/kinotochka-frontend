import { IRating } from 'src/types/Rating.types';
import { API_BASE_URL } from 'src/utils/constants';


const API_AUTH_URL = `${API_BASE_URL}/movies`;

const checkRes = (res: Response) => {
	if (res.ok) {
		
		return res;
	} else {
		return Promise.reject(res);
	}
};


const fetchData = (
	url: string,
    rate: number 
	) => {
		console.log({rate})
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		...({ body: JSON.stringify({rate}) }),
	}).then((res) => checkRes(res));
};

export const fetchRating = (id: any, rate: any): Promise<Response> => {
	return fetchData(`${API_AUTH_URL}/${id}/rate`, rate).then((res) => checkRes(res));
};



