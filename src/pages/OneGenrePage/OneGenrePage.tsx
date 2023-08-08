import './OneGenrePage.css';
import { useEffect, FC, useState } from 'react';
import { getMoviesByGenreApi } from '../../services/redux/slices/movieByGenre/moviesByGenre';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { IFilms } from 'src/types/Film.types';
import { IFlanks } from 'src/types/Flanks.types';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { getSelectionsApi } from '../../services/redux/slices/selections/selections';
import { FilmCard } from 'src/components/FilmCardWidth255/FilmCard';
import { SelectionCard } from 'src/components/SelectionCard/SelectionCard';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';



const OneGenrePage: FC = () => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);
	const dispatch = useAppDispatch();
	const filmsBygenre = useAppSelector((state) => state.moviesbygenre.films);
	const page = useAppSelector((state) => state.windowResize.page);
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [pageMore, setPageMore] = useState(page);
	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + page);
	};
	
	console.log(filmsBygenre)
	
	
	
	return (
		<section className="flank">
			<h1 className="flank_title"></h1>
			<div className="flank_container">
				{
					filmsBygenre
						.slice(0, pageMore)
						.map((film) => <FilmCard film={film} />)
				}
			</div>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};
	
	
export default OneGenrePage;
