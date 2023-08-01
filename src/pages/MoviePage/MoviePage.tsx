import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './MoviePage.css';
import ActorsList from '../../components/Actors/ActorsList';
import { RatedElement } from '../../components/RatedElement/RatedElement';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import MovieButton from '../../components/MovieButton/MovieButton';
import { ButtonTypes } from '../../types/Rating.types';
import TrailerButton from '../../components/TrailerButton/TrailerButton';
import { FC } from 'react';
import RatingElement from 'src/components/RatingElement/RatingElement';
import FilmAbout from 'src/components/FilmAbout/FilmAbout';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';
import { SlickSliderTypes } from '../../types/Rating.types';
import FilmDescription from 'src/components/FilmDescription/FilmDescription';

const MoviePage: FC = () => {
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.films.films[5]);
	const films2 = useAppSelector((state) => state.films.films[0]);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	return (
		<section className="moviepage">
			<img className="background-image" alt="" src={films2.imageUrl} />
			<div className="moviepage__container">
				<div className="movie-block">
					<img className="movie-block__img" alt="" src={films.imageUrl} />
					<div className="movie-block__text">
						<div>
							<h2 className="movie-block__text_title">{films.title}</h2>
							<RatedElement
								imdb={films.rating.imdb}
								kinopoisk={films.rating.kinopoisk}
								isSearch={false}
							/>
						</div>
						<ActorsList actors={films.actor} />
					</div>
					<div className="moviepage__button__container">
						<div className="moviepage__button__container_plus">
							<MovieButton buttonName={ButtonTypes.favorites} id={films.id} />
							<MovieButton buttonName={ButtonTypes.willSee} id={films.id} />
						</div>
						<RatingElement />
					</div>
				</div>
				<div className="description__container">
					<div>
						<FilmDescription />
						<TrailerButton imageUrl={films.imageUrl} />
					</div>
					<FilmAbout />
				</div>
				<div className="moviepage-cards__container">
					<SlickSlider type={SlickSliderTypes.similar} />
				</div>
			</div>
		</section>
	);
};

export default MoviePage;
