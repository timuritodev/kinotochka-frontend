import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import './MoviePage.css';
import ActorsList from './Actors/ActorsList';
import ProducersList from './Producers/ProducersList';
import PopupTrailer from './PopupTrailer/PopupTrailer';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { getMoviesRating } from 'src/services/redux/slices/rating/rating';

function MoviePage() {
    const dispatch = useAppDispatch();

    const films = useAppSelector((state) => state.films.films[2]);
    const rating = useAppSelector((state) => state.rating.movie_rating);

    useEffect(() => {
        dispatch(getFilmsApi());
        dispatch(getMoviesRating());
    }, []);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const switchPopupTrailer = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    function handleAddToFavourite() {
        console.log("movies_rating - is_favourite: true") 
    }

    function handleWillWatch() {
        console.log("movies_rating - must_see: true") 
    }

    function handleWatched() {
        console.log("movies_rating - is_viewed: true") 
    }

    return (
        <section className="moviepage">
            <div className="movie-block">
                <img
                    className="movie-block__img"
                    alt=""
                    src={films.imageUrl}
                />
                <div className="movie-block__text">
                    <h2 className="movie-block__text_title">{films.title}</h2> 
                    <p className="movie-block__text_year">{films.year}</p> 
                    <p className="movie-block__text_subtitle">{films.shortDescription}</p>
                </div>
                <div className='movie-block__rating__container'>
                    <RatedElement imdb={films.rating.imdb} kinopoisk={films.rating.kinopoisk} />
                    <div className='movie-block__rating__text__container'>
                        <p className="movie-block__rating__text">10</p>
                        <p className="movie-block__rating__subtext">{100} оценок</p> 
                    </div>
                </div>
            </div>
            <div className="moviepage__button__container">
                <button className="moviepage__button" onClick={switchPopupTrailer}>
                    <img
                        className="moviepage__button_img"
                        alt=""
                    // src={icon}
                    />
                    <span className="moviepage__button__text">Смотреть трейлер</span>
                </button>
                <button className="moviepage__button_favourite" onClick={handleAddToFavourite}>
                    {rating.is_favorite === true ? "Добавлено" : "Добавить"}
                </button>
                <button className="moviepage__button_later" onClick={handleWillWatch}>
                    {rating.is_viewed === true ? "Добавлено" : "Добавить"}
                </button>
                <button className="moviepage__button_seen" onClick={handleWatched}>
                    {rating.must_see === true ? "Добавлено" : "Добавить"}
                </button>
            </div>
            {/* <ActorsList actors />
            <ProducersList producers /> */}
            <PopupTrailer
                isPopupOpen={isPopupOpen}
                switchPopupTrailer={switchPopupTrailer}
            />
        </section>
    );
}

export default MoviePage;
