import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { useEffect } from 'react';
import './FilmAbout.css';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';

const FilmAbout: FC = () => {
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
			<div className="moviepage-description__about">
				<h2 className="moviepage-description__title">О фильме</h2>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Год</p>
					<p className="moviepage-description__about__text">{films.year}</p>
				</div>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Жанр</p>
					<p className="moviepage-description__about__text">
						{films.genres.join(', ')}
					</p>
				</div>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Страна</p>
					<p className="moviepage-description__about__text">{films.country}</p>
				</div>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Режиссер</p>
					<p className="moviepage-description__about__text">-</p>
				</div>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Категория</p>
					<p className="moviepage-description__about__text">-</p>
				</div>
				<div className="moviepage-description__about__container">
					<p className="moviepage-description__about__text_add">Возраст</p>
					<p className="moviepage-description__about__text">-</p>
				</div>
			</div>
		</div>
	);
};

export default FilmAbout;
