import './FilmCardSmall.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IFilms } from 'src/types/Film.types';

export const FilmCardSmall = ({ film }: { film: IFilms }) => {
	return (
		<section key={film.id} className="moviepage_card">
			<img className="moviepage_card-img" src={film.imageUrl} alt="" />
			<div className="bookmark-small">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="moviepage_card-title">{film.title}</h4>
			<p className="moviepage_card-subtitle">{`${film.genres.join(', ')} • ${
				film.year
			}`}</p>
			<RatedElement imdb={film.rating.imdb} kinopoisk={film.rating.kinopoisk} />
		</section>
	);
};