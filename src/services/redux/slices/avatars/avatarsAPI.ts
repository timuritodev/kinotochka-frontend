import { IAvatars } from 'src/types/Avatars.types';
import { API_BASE_URL } from 'src/utils/constants';
import comedy from '../../../../images/avatar/comedy.svg';
import cartoon from '../../../../images/avatar/cartoon.svg';
import horror from '../../../../images/avatar/horror.svg';
import fantastic from '../../../../images/avatar/fantastic.svg';
import thrilleer from '../../../../images/avatar/thriller.svg';
import anime from '../../../../images/avatar/anime.svg';
import melodrama from '../../../../images/avatar/melodrama.svg';
import drama from '../../../../images/avatar/drama.svg';
import family from '../../../../images/avatar/family.svg';

const checkRes = (res: Response) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(res);
	}
};

export const fetchData = (url: string, method: string, token?: string) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(!!token && { Authorization: `Token ${token}` }),
		},
	}).then((res) => checkRes(res));
};

export const fetchAvatars = (token: string): Array<IAvatars> => {
	// return fetchData(`${API_BASE_URL}/avatars/`, 'GET', token);

	const avatars = [
		{
			id: 1,
			url: comedy,
		},
		{
			id: 2,
			url: cartoon,
		},
		{
			id: 3,
			url: horror,
		},
		{
			id: 4,
			url: fantastic,
		},
		{
			id: 5,
			url: thrilleer,
		},
		{
			id: 6,
			url: anime,
		},
		{
			id: 7,
			url: melodrama,
		},
		{
			id: 8,
			url: drama,
		},
		{
			id: 9,
			url: family,
		},
	];
	return avatars;
};
