export interface IFilms {
	id: string;
	title: string;
	rating: IRating;
	shortDescription: string;
	imageUrl: string;
	movieCardUrl: string;
	index: number;
	year: number;
	genres: string[]
}

interface IRating {
	kinopoisk: number;
	imdb: number;
}

export interface IFilmsState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	films: Array<IFilms>;
}
