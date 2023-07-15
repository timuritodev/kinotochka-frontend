import './FlanksPage.css';
import React, { useEffect } from 'react';
import { IFlanks } from 'src/types/Flanks.types';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FilmCard } from 'src/components/FilmCardWidth255/FilmCard';

const FlanksPage: FC<IFlanks> = ({ formName }) => {
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.films.films);
	const selections = useAppSelector((state) => state.selection);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	const title =
		formName === 'ratedFilms'
			? 'Оцененные фильмы'
			: formName === 'willSee'
				? 'Буду смотреть'
				: formName === 'favorites'
					? 'Избранные'
					: 'Подборки';

	return (
		<section className="flank">
			<h1 className="flank_title">{title}</h1>
			<section className="flank_container">
				{films.map((film) => (
					<FilmCard film={film} />
				))}
			</section>
		</section>
	);
};

export default FlanksPage;
