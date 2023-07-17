import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import './MoviePage.css';
import ActorsList from '../../components/Actors/ActorsList';
import ProducersList from '../../components/Producers/ProducersList';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import MovieButton from 'src/components/MovieButton/MovieButton';
import { ButtonTypes } from 'src/types/Rating.types';
import TrailerButton from 'src/components/TrailerButton/TrailerButton';

function MoviePage() {
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.films.films[5]);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	return (
		<section className="moviepage">
			<div className="movie-block">
				<img className="movie-block__img" alt="" src={films.imageUrl} />
				<div className="movie-block__text">
					<h2 className="movie-block__text_title">{films.title}</h2>
					<p className="movie-block__text_year">{films.year}</p>
					<p className="movie-block__text_subtitle">{films.shortDescription}</p>
				</div>
				<div className="movie-block__rating">
					<RatedElement
						imdb={films.rating.imdb}
						kinopoisk={films.rating.kinopoisk}
					/>
				</div> 
			</div>
			<div className="moviepage__button__container">
                <TrailerButton />
                <MovieButton buttonName={ButtonTypes.favorites} />
                <MovieButton buttonName={ButtonTypes.willSee}/>
                <MovieButton buttonName={ButtonTypes.seen}/>
			</div>
			<ActorsList />
            <ProducersList />
		</section>
	);
}

export default MoviePage;
