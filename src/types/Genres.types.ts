export interface IGenres {
	id: number;
	title: string;
	slug: string;
	picture: string;
}

export interface IGenresState {
	genres: Array<IGenres>;
}
