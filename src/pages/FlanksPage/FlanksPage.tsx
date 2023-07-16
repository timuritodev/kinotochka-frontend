import './FlanksPage.css';
import React, { useEffect } from 'react';
import { IFlanks } from 'src/types/Flanks.types';
import { FC } from 'react';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { getSelectionsApi } from '../../services/redux/slices/selections/selections';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FilmCard } from 'src/components/FilmCardWidth255/FilmCard';
import { SelectionCard } from 'src/components/SelectionCard/SelectionCard';

const FlanksPage: FC<IFlanks> = ({ formName }) => {

	const dispatch = useAppDispatch();
	const selected = useAppSelector((state) => state.selection.selections);
	const favorites = useAppSelector((state) => state.films.favoriteFilms);
	const willSee = useAppSelector((state) => state.films.mustSeeFilms);
	const ratedFilms = useAppSelector((state) => state.films.viewedFilms);

	useEffect(() => {
		dispatch(getFilmsApi());
		dispatch(getSelectionsApi());
	}, []);

	const togglefavorites =
		formName === 'ratedFilms'
			? ratedFilms
			: formName === 'willSee'
				? willSee
				: formName === 'favorites'
					? favorites
					: [];

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
				{formName === 'collections' ? (
					<SelectionCard selected={selected}/>
				) : (
					togglefavorites.map((film) => (
						<FilmCard film={film} />
					))
				)}
			</section>
		</section>
	);
};

export default FlanksPage;
