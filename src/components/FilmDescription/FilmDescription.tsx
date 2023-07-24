import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './FilmDescription.css';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';

const FilmDescription: FC = () => {
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.films.films[5]);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	return (
		<div className="moviepage-description">
			<div className="moviepage-description__container">
				<h2 className="moviepage-description__title">Описание</h2>
				<p className="moviepage-description__subtitle">
					{films.shortDescription}
				</p>
			</div>
		</div>
	);
};

export default FilmDescription;
