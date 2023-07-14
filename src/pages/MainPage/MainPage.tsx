import { Link } from 'react-router-dom';
import './MainPage.css';
import FirstScreenCompilation from '../../components/FirstScreenCompilation/FirstScreenCompilation';

export default function MainPage() {
	return (
		<main className="main-page" id="main-page">
			<FirstScreenCompilation />
			<h1 className="main-page__title">Main</h1>
			<Link to="/sign-in">Войти</Link>
			<Link to="/sign-up">Зарегистрироваться</Link>
		</main>
	);
}
