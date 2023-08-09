export interface IFavorites {
	id: number;
	title: string;
	h_picture: string;
	premiere_date: string;
	rating: IRating;
	is_favorite: boolean;
	is_need_see?: boolean;
}

export interface IRating {
	rate_imdb: number;
	rate_kinopoisk: number;
}

export interface IFavoritesState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	movie: IFavorites;
}
