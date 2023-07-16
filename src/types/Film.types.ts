export interface IFilms {
	id: string;
	title: string;
	rating: IRating;
	shortDescription: string;
	imageUrl: string;
	movieCardUrl: string;
	index: number;
	year: number;
	genres: string[];
	is_viewed: boolean
	must_see?: boolean
	is_favorite?: boolean
}

export interface ISelect {
	id: number
	title: string
	description: string
	movie: IFilms[]

}

interface IRating {
	kinopoisk: number;
	imdb: number;
}

export interface IFilmsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	films: Array<IFilms>;
	favoriteFilms: Array<IFilms>
	mustSeeFilms: Array<IFilms>
	viewedFilms: Array<IFilms>
}

export interface ISelectionState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	selections: ISelect[];
}
