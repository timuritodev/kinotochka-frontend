import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './MoviePage.css';
import ActorsList from '../../components/Actors/ActorsList';
import { RatedElement } from '../../components/RatedElement/RatedElement';
import MovieButton from '../../components/MovieButton/MovieButton';
import { ButtonTypes } from '../../types/Rating.types';
import TrailerButton from '../../components/TrailerButton/TrailerButton';
import { FC } from 'react';
import RatingElement from 'src/components/RatingElement/RatingElement';
import FilmAbout from 'src/components/FilmAbout/FilmAbout';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';
import { SlickSliderTypes } from '../../types/Rating.types';
import FilmDescription from 'src/components/FilmDescription/FilmDescription';
import { getMoviebyidApi } from 'src/services/redux/slices/moviebyid/moviebyid';

const MoviePage: FC = () => {
	const dispatch = useAppDispatch();

	const film = useAppSelector((state) => state.film.film);
	const filmid = useAppSelector((state) => state.filmid)

	useEffect(() => {
		dispatch(getMoviebyidApi(filmid.id));
	}, []);

	return (
		<section className="moviepage">
			<img className="background-image" alt="" src={film.h_picture} />
			<div className="moviepage__container">
				<div className="movie-block">
					<img className="movie-block__img" alt="" src={film.v_picture} />
					<div className="movie-block__text">
						<div>
							<h2 className="movie-block__text_title">{film.title}</h2>
							<RatedElement
								imdb={film.rating.rate_imdb}
								kinopoisk={film.rating.rate_kinopoisk}
								isSearch={false}
							/>
						</div>
						<ActorsList actors={film.actors} />
					</div>
					<div className="moviepage__button__container">
						<div className="moviepage__button__container_plus">
							<MovieButton buttonName={ButtonTypes.favorites} id={film.id} />
							<MovieButton buttonName={ButtonTypes.willSee} id={film.id} />
						</div>
						<RatingElement />
					</div>
				</div>
				<div className="description__container">
					<div>
						<FilmDescription description={film.description} />
						{film.trailer_link !== '-'
							?
							(<TrailerButton imageUrl={film.h_picture} />)
							:
							''}
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
