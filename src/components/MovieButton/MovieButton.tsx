import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import './MovieButton.css';
import { IButton } from 'src/types/Rating.types';
import { FC } from 'react';
import {
	updateFavorite,
	updateWatch,
} from 'src/services/redux/slices/films/films';
import eye from "../../images/black_eye.svg"
import eye_clicked from '../../images/eye_clicked.svg'
import bookmark from '../../images/Bookmark.svg'
import bookmark_clicked from '../../images/bookmark_clicked.svg'

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

	const typesImg =
		buttonName === 'favorites'
			? filmFav
				? bookmark
				: bookmark_clicked
			: filmWatch
				? eye_clicked
				: eye

	return (
		<section
			className="moviepage-button__container"
			onClick={
				buttonName === 'favorites' ? handleClickFavorite : handleClickWatch
			}
		>
			<div className="moviepage-button" />
			<img className="moviepage-button__img" src={typesImg} alt="icon" />
		</section>
	);
};

export default MovieButton;
