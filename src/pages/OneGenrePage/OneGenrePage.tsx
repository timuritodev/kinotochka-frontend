import './OneGenrePage.css';
import { FC } from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../services/typeHooks';
import { FilmCardByGenre } from 'src/components/FilmCardByGenre/FilmCardByGenre';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { IFilmsbyGenre } from 'src/types/FilmsByGenre.types';

const OneGenrePage: FC = () => {
	const filmsBygenre = useAppSelector((state) => state.moviesbygenre.films);
	const page = useAppSelector((state) => state.windowResize.page);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [pageMore, setPageMore] = useState(page);
	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};
	const genre = localStorage.getItem('genre');

	return (
		<section className="flank">
			<h1 className="flank_title">
				Жанр{' '}
				{filmsBygenre[0].genres.find(
					(element: string) => element === `${genre}`
				)}
			</h1>
			<div className="flank_container">
				{filmsBygenre.slice(0, pageMore).map((film: IFilmsbyGenre) => (
					<FilmCardByGenre film={film} />
				))}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};

export default OneGenrePage;
