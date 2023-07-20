export enum SliderTypes {
	genresBlock = 'genresBlock',
	genresRow = 'genresRow',
	moviesSmallCards = 'moviesSmallCards',
	moviesBigCards = 'moviesBigCards',
}

export interface ISlider {
	contentType: SliderTypes;
	content: string[];
}
