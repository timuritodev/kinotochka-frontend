import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './MainPage.css';
import FirstScreenCompilation from '../../components/FirstScreenCompilation/FirstScreenCompilation';
import Slider, { SliderTypes } from 'src/components/Slider/Slider';
import { GENRES } from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getFilmsApi } from '../../services/redux/slices/films/films';

export default function MainPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	const films = useAppSelector((state) => state.films.films);

	return (
		<main className="main-page" id="main-page">
			<FirstScreenCompilation film={films[0]} />
			<h1 className="main-page__title">Main</h1>
			<Link to="/sign-in">Войти</Link>
			<Link to="/sign-up">Зарегистрироваться</Link>
			<br />
			<Slider contentType={SliderTypes.genresRow} content={GENRES} />
		</main>
	);
}
