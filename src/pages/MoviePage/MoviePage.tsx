import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './MoviePage.css';
import ActorsList from '../../components/Actors/ActorsList';
import ProducersList from '../../components/Producers/ProducersList';
import { RatedElement } from '../../components/RatedElement/RatedElement';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import MovieButton from '../../components/MovieButton/MovieButton';
import { ButtonTypes } from '../../types/Rating.types';
import TrailerButton from '../../components/TrailerButton/TrailerButton';

const MoviePage: FC = () => {
    const dispatch = useAppDispatch();

    const films = useAppSelector((state) => state.films.films[2]);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

    return (
        <>
            <BackgroundImage imageUrl={films.imageUrl} />
            <section className="moviepage">
                <div className='moviepage__container'>
                    <div className="movie-block">
                        <img className="movie-block__img" alt="" src={films.imageUrl} />
                        <div className="movie-block__text">
                            <div>
                                <h2 className="movie-block__text_title">{films.title}</h2>
                                <RatedElement imdb={films.rating.imdb} kinopoisk={films.rating.kinopoisk} />
                            </div>
                            <ActorsList actors={films.actor} />
                        </div>
                        <div className="moviepage__button__container">
                            <div className='moviepage__button__container_plus'>
                                <MovieButton buttonName={ButtonTypes.favorites} />
                                <MovieButton buttonName={ButtonTypes.willSee} />
                            </div>
                            <RatingElement />
                        </div>
                    </div>
                    <FilmAbout />
                </div>
                <TrailerButton imageUrl={films.imageUrl} />
            </section>
        </>
    );
}

export default MoviePage;
