import './Search.css';
import { useAppSelector } from 'src/hooks/redux';
import { IFilms } from 'src/types/Film.types';
import { RatedElement } from '../RatedElement/RatedElement';
import { useState, useEffect } from 'react';

const Search = ({
	isOpenSearch,
	values,
}: {
	isOpenSearch: boolean;
	values: string;
}) => {
	const films = useAppSelector((state) => state.films.films);
	const [isFilteredFilms, setIsFilteredFilms] = useState(false);

	function filterFilms() {
		return films.filter((film: IFilms) => {
			const filmFind = film.title.toLowerCase();
			const userFilm = values.toLowerCase();
			return filmFind.includes(userFilm);
		});
	}
	const filteredFilms = filterFilms();

	useEffect(() => {
		if (filteredFilms.length === 0) {
			setIsFilteredFilms(true);
		} else {
			setIsFilteredFilms(false);
		}
	}, [values]);

	return (
		<section
			className={`searchGeneral ${isOpenSearch && 'searchGeneral_open'}`}
		>
			<div className="searchGeneral__films" id="searchGeneral__films">
				{!isFilteredFilms ? (
					filteredFilms.map((film: IFilms) => (
						<a href={film.movieCardUrl} className="searchGeneral__film">
							<img
								className="searchGeneral__film-poster"
								src={film.imageUrl}
							></img>
							<article className="searchGeneral__film-desc">
								<p className="searchGeneral__film-name">{film.title}</p>
								<div className="searchGeneral__film-info">
									<p className="searchGeneral__film-rating">
										<RatedElement
											imdb={film.rating.imdb}
											kinopoisk={film.rating.kinopoisk}
										/>
									</p>
									<p className="searchGeneral__film-country">
										{film.country.join(', ')}
									</p>
									<p className="searchGeneral__film-year">{film.year}</p>
								</div>
							</article>
						</a>
					))
				) : (
					<p className="searchGeneral__film-none">Фильмы не найдены</p>
				)}
			</div>
		</section>
	);
};

export default Search;
