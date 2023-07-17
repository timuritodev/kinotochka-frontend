import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { getMoviesRating } from 'src/services/redux/slices/rating/rating';
import "./MovieButton.css";
import { IButton } from 'src/types/Rating.types';
import { FC } from 'react';

const MovieButton: FC<IButton> = ({ buttonName }) => {

    console.log(buttonName)
    
    const dispatch = useAppDispatch();

    const rating = useAppSelector((state) => state.rating.movie_rating);

    useEffect(() => {
        dispatch(getMoviesRating());
    }, []);

    function handleAddToFavourite() {
		console.log('movies_rating - is_favourite: true');
	}

    // const title =
    // buttonName === "favorite"
    //     ? 'Оцененные фильмы'
    //     : buttonName === 'willSee'
    //     ? 'Буду смотреть'
    //     : buttonName === 'seen'
    //     ? 'Просмотрено'
    //     : 'Уже просмотрел';

    // const buttonText = ''

    // if (buttonName === 'favorite') {
    //     buttonText = rating.is_favorite === true ? 'Добавлено' : 'Добавить';
    // } else if (buttonName === 'seen') {
    //     buttonText = rating.is_viewed === true ? 'Просмотрено' : 'Уже просмотрел';
    // } else {
        // buttonText = rating.must_see === true ? 'Посмотрю' : 'Уже смотрел';
    // }
    return (
        <>
            <button
                className="moviepage__button_favourite"
                onClick={handleAddToFavourite}
            >
                {rating.is_favorite === true ? 'Добавлено' : 'Добавить'}
            </button>
        </>
    );
}

export default MovieButton;
