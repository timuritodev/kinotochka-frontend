import './AllGenresPage.css';
import { useEffect, useState } from 'react';
import { getGenresApi } from '../../services/redux/slices/genres/genres';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { IGenres } from 'src/types/Genres.types';
import { getMoviesByGenreApi } from 'src/services/redux/slices/movieByGenre/moviesByGenre';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import OneGenrePage from '../OneGenrePage/OneGenrePage';

const AllGenresPage = ({ genres }: { genres: IGenres[] }) => {
	const navigate = useNavigate();
	const [checked, setChecked] = useState(false);
	const [GenreLinkClick, setGenreLinkClick] = useState(false);
	const dispatch = useAppDispatch();
	const genre = useAppSelector((state) => state.genres.genres);
	

	useEffect(() => {
		dispatch(getGenresApi());
	}, []);

	const handleGenreClick = (item: string) => {
		dispatch(getMoviesByGenreApi({ genres: item }));
		navigate('/onegenre');
	};

	return (
		<section className="allgenrespage">
			<h2 className="title">Все жанры</h2>
			<ul className="allgenrespage__container">
				{genre.map((item) => (
					<li className="allgenrespage__list">
						<button
							className="allgenrespage__link"
							onClick={() => handleGenreClick(item.slug)}
						>
							<img
								className="allgenrespage__img"
								alt={item.slug}
								src={item.picture}
							></img>
							<p className="allgenrespage__title">{item.title}</p>
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default AllGenresPage;
