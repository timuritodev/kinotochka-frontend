import './FilmCardLarge.css';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { BookmarkSmall } from 'src/components/Bookmark_small/Bookmark_small';
import { IFilms } from 'src/types/Film.types';

export const FilmCardLarge = ({ film }: { film: IFilms }) => {
	return (
		<section key={film.id} className="specailforyou_card">
			<img className="specailforyou_card-img" src={film.imageUrl} alt="" />
			<div className="bookmark-large">{<BookmarkSmall id={film.id} />}</div>
			<h4 className="specailforyou_card-title">{film.title}</h4>
			<p className="specailforyou_card-subtitle">{`${film.genres.join(
				', '
			)} • ${film.year}`}</p>
			<RatedElement
				imdb={film.rating.imdb}
				kinopoisk={film.rating.kinopoisk}
				isSearch={false}
			/>
		</section>
	);
};
