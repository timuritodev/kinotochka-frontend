import './FirstScreenCompilation.css';
import { Link } from 'react-router-dom';
import { RatedElement } from '../RatedElement/RatedElement';
import { IMoviesOfDay } from 'src/types/moviesoftheday.types';

export default function FirstScreenCompilation({ film }: { film: IMoviesOfDay }) {
	return (
		<section className="first-screen-compilation">
			<img className="movie__img" src={film.h_picture} alt={film.title} />
			<div className="movie">
				<p className="movie__name">{film.title}</p>
				<RatedElement
					imdb={film.rate_imdb}
					kinopoisk={film.rate_kinopoisk}
					isSearch={false}
				/>
				<p className="movie__description">{film.short_description}</p>
				<div className="button-wraper">
					<Link to="/movie-page" className="movie__more-detailed">
						Подробнее
					</Link>
					<button className="movie__bookmark"></button>
				</div>
			</div>
		</section>
	);
}
