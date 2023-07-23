import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './MainPage.css';
import FirstScreenCompilation from '../../components/FirstScreenCompilation/FirstScreenCompilation';
import Slider from 'src/components/Slider/Slider';
import { GENRES } from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { SliderTypes } from '../../types/Slider.types';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';
import { SlickSliderTypes } from 'src/types/Rating.types';
import { SlickSliderGenres } from 'src/components/SlickSliderGenres/SlickSliderGenres';

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
			{/* <Slider contentType={SliderTypes.genresRow} content={GENRES} /> */}
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.oscar} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.specialforyou} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.blackwhite} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.news} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.similar} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSliderGenres content={GENRES} />
			</div>
		</main>
	);
}
