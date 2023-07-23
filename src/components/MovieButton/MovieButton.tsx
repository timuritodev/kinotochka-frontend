import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import { getMoviesRating } from 'src/services/redux/slices/rating/rating';
import './MovieButton.css';
import { IButton } from 'src/types/Rating.types';
import { FC } from 'react';

const MovieButton: FC<IButton> = ({ buttonName }) => {
	const dispatch = useAppDispatch();

	const rating = useAppSelector((state) => state.rating.movie_rating);

	useEffect(() => {
		dispatch(getMoviesRating());
	}, []);

	function handleAddToFavourite() {
		console.log('movies_rating - is_favourite: true');
	}

	let buttonText = '';

	if (buttonName === 'favorites') {
		buttonText = rating.is_favorite === true ? '1 - Добавлено' : '1 -Добавить';
	} else if (buttonName === 'seen') {
		buttonText =
			rating.is_viewed === true ? '2 -Просмотрено' : '2 -Уже просмотрел';
	} else if (buttonName === 'willSee') {
		buttonText = rating.must_see === true ? '3 -Посмотрю' : '3 -Уже смотрел';
	}
	return (
		<>
			<button
				className="moviepage__button_favourite"
				onClick={handleAddToFavourite}
			>
				{buttonText}
			</button>
		</>
	);
};

export default MovieButton;
