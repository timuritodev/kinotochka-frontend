import './FilmCardSmall.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IMovieCard } from 'src/types/MovieCard.types';

export const FilmCardSmall = ({ film }: { film: IMovieCard }) => {
	return (
		<section key={film.id} className="moviepage_card">
			<img className="moviepage_card-img" src={film.v_picture} alt="" />
			<div className="bookmark-small">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="moviepage_card-title">{film.title}</h4>
			<p className="moviepage_card-subtitle">{`${film.genres.join(', ')} • ${
				film.year
			}`}</p>
			<RatedElement
				imdb={film.rating.rate_imdb}
				kinopoisk={film.rating.rate_kinopoisk}
				isSearch={false}
			/>
		</section>
	);
};
