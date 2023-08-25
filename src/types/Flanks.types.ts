export enum FlanksTypes {
	ratedFilms = 'ratedFilms',
	willSee = 'willSee',
	favorites = 'favorites',
	collections = 'collections',
	selections = 'selections',
}

export interface IFlanks {
	formName: FlanksTypes;
}
