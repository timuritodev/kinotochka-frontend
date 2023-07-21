import { IActor } from './Film.types';

export interface IRating {
	id: number;
	user: number;
	movie: number;
	rate: number;
	is_viewed: boolean;
	must_see: boolean;
	is_favorite: boolean;
}

export interface IRatingState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	movie_rating: IRating;
}

export enum ButtonTypes {
	seen = 'seen',
	willSee = 'willSee',
	favorites = 'favorites',
}

export interface IButton {
	buttonName: ButtonTypes;
}

export interface IImage {
	imageUrl: string;
}

export interface ActorsListProps {
	actors: IActor[];
}
export interface PopupTrailerProps {
  isPopupOpen: boolean;
  switchPopupTrailer: () => void;
}

export enum SlickSliderTypes {
	oscar = 'oscar',
	news = 'news',
	blackwhite = 'blackwhite',
	specialforyou = 'specialforyou',
	similar = 'similar',
}
