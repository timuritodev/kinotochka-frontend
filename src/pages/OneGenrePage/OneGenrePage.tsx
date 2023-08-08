import './OneGenrePage.css';
import { useEffect, FC, useState } from 'react';
import { getMoviesByGenreApi } from '../../services/redux/slices/movieByGenre/moviesByGenre';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { IFilms } from 'src/types/Film.types';



const OneGenrePage: FC = () => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);
	const dispatch = useAppDispatch();
	const filmsBygenre = useAppSelector((state) => state.moviesbygenre.films);
	console.log(filmsBygenre)
	
	
	return (
		<section className="allgenrespage">
			<h2></h2>
			<ul className="allgenrespage__container">
				{filmsBygenre.map((item) => (
					<li className="allgenrespage__list">
						<button
							className="allgenrespage__link"
							
						>
							<img
								className="allgenrespage__img"
								
							></img>
							<p className="allgenrespage__title">{item.title}</p>
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default OneGenrePage;
