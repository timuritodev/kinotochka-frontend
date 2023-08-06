import './OneGenrePage.css';
import { useEffect, FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { updateGenres } from '../../services/redux/slices/genres/genres';



const OneGenrePage: FC = () => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);
	const dispatch = useAppDispatch();
	const films = useAppSelector((state) => state.films.films);
	const genres = useAppSelector((state) => state.genres.genres);

	
console.log(films)
	return (
		<section className="allgenrespage">
			<ul className="allgenrespage__container">
			
					<li className="allgenrespage__list">
						<button
							className="allgenrespage__link"
						>
							<img
								className="allgenrespage__img"
								
							></img>
							<p className="allgenrespage__title"></p>
						</button>
					</li>
		
			</ul>
		</section>
	);
};

export default OneGenrePage;
