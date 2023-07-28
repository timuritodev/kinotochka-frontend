import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import './MovieButton.css';
import { IButton } from 'src/types/Rating.types';
import { FC } from 'react';
import {
	updateFavorite,
	updateWatch,
} from 'src/services/redux/slices/films/films';

const MovieButton: FC<IButton> = ({ buttonName, id }) => {

	const dispatch = useAppDispatch();
	const filmFav = useAppSelector(
		(state) => state.films.films.find((film) => film.id === id)?.is_favorite
	);
	const filmWatch = useAppSelector(
		(state) => state.films.films.find((film) => film.id === id)?.must_see
	);

	const handleClickFavorite = () => {
		dispatch(updateFavorite({ favorite: !filmFav, id }));
	};

	const handleClickWatch = () => {
		dispatch(updateWatch({ watch: !filmWatch, id }));
	};
	return (
		<>
			<button
				className={`moviepage-button ${buttonName === 'favorites'
						? 'moviepage__button_favourite'
						: 'moviepage__button_seen'
					}`}
				onClick={
					buttonName === 'favorites' ? handleClickFavorite : handleClickWatch
				}
			/>
		</>
	);
};

export default MovieButton;
