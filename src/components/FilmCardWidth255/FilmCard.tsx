import './FilmCard.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IFilms } from 'src/types/Film.types';

export const FilmCard = ({ film }: { film: IFilms }) => {
	return (
		<section key={film.id} className="flanks_card">
			<img className="flanks_card-img" src={film.imageUrl} alt="" />
		<div className="bookmark-small">{<BookmarkSmall id={film.id}/>}</div>
			<h4 className="flanks_card-title">{film.title}</h4>
			<p className="flanks_card-subtitle">{`${film.genres.join(', ')} • ${
				film.year
			}`}</p>
			<RatedElement imdb={film.rating.imdb} kinopoisk={film.rating.kinopoisk} />
		</section>
	);
};
