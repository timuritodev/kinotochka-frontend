import './FirstScreenCompilation.css';
import { Link } from 'react-router-dom';
import { RatedElement } from '../RatedElement/RatedElement';
import { IFilms } from 'src/types/Film.types';

export default function FirstScreenCompilation({ film }: { film: IFilms }) {
	return (
		<section className="first-screen-compilation">
			<div className="movie">
				<p className="movie__name">Переводчик</p>
				<RatedElement imdb={film.rating.imdb} kinopoisk={film.rating.kinopoisk} />
				<p className="movie__description">
					Афганистан, март 2018 года. Во время спецоперации по поиску оружия
					талибов отряд сержанта армии США Джона Кинли попадает в засаду. В
					живых остаются...
				</p>
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
