import { Link } from 'react-router-dom';
import './MainPage.css';
import Slider, { SliderTypes } from 'src/components/Slider/Slider';
import { GENRES } from 'src/utils/constants';

export default function MainPage() {
	return (
		<main className="main-page" id="main-page">
			<h1 className="main-page__title">Main</h1>
			<Link to="/sign-in">Войти</Link>
			<Link to="/sign-up">Зарегистрироваться</Link>
			<br />
			<Slider contentType={SliderTypes.genresRow} content={GENRES} />
		</main>
	);
}
