import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './MainPage.css';
import FirstScreenCompilation from '../../components/FirstScreenCompilation/FirstScreenCompilation';
import Slider from 'src/components/Slider/Slider';
import { GENRESv2 } from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import { SliderTypes } from '../../types/Slider.types';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';
import { SlickSliderTypes } from 'src/types/Rating.types';
import { SlickSliderGenres } from 'src/components/SlickSliderGenres/SlickSliderGenres';
import { SpecialForYou } from 'src/components/SpecialForYou/SpecialForYou';
import { SlickSliderDayMovies } from 'src/components/SlickSliderDayMovies/SlickSliderDayMovies';
import { Loader } from 'src/components/Loader/Loader';
import { SlickSliderGenresAPI } from 'src/components/SlickSliderGenres/SlickSliderGenresAPI';
import { getNewMovieCardsApi } from 'src/services/redux/slices/newmoviecards/newmoviecards';
import { getMoviesApi } from 'src/services/redux/slices/movies/movies';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';
import { getFavoritesApi } from 'src/services/redux/slices/favorites/favorites';

export default function MainPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getNewMovieCardsApi());
		dispatch(getMoviesApi());
		dispatch(getCompilationsApi());
		dispatch(getFavoritesApi())
	}, []);

	const films = useAppSelector((state) => state.films.films);
	const compilations = useAppSelector((state) => state.compilations.data)

	return (
		<main className="main-page" id="main-page">
			<SlickSliderDayMovies />
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.news} />
			</div>
			<div className="main-page_slick-slider">
				<div className="main-page_slick-slider_specialforyou">
					{isLoggedIn === true ? (
						<SlickSlider type={SlickSliderTypes.specialforyou} />
					) : (
						<SpecialForYou />
					)}
				</div>
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.redactionOne} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.redactionTwo} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSlider type={SlickSliderTypes.redactionThree} />
			</div>
			<div className="main-page_slick-slider">
				<SlickSliderGenresAPI />
			</div>
		</main>
	);
}
