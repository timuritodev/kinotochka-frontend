import { FC } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import Account from '../Account/Account';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	return (
		<header className="header" id="header">
			<Link to="/">
				<img className="header__logo" alt="лого" src={logo} />
			</Link>
			<form className="header__search">
				<input
					className="header__search-input"
					id="name"
					name="name"
					type="text"
					placeholder="Какой фильм вы хотите найти?"
					// value={values.name || ''}
					// onChange={handleChange}
					// disabled={isLoading}
				/>
				<button className="header__search-button" type="submit">
					<img
						className="header__search-button_search"
						src={search}
						alt="Кнопка поиска"
						// disabled={!isValid}
					/>
				</button>
			</form>
			<Account
			// isLoggedIn={true}
			/>
			<Link to="/rated-films">Оцененные фильмы</Link>
			<Link to="/will-see">Буду смотреть</Link>
			<Link to="/favorites">Избранные</Link>
			<Link to="/collections">Подборки</Link>
			<Link to="/movie-page">Страница фильма</Link>
			<Link to="/search-result">страница результатов поиска</Link>
		</header>
	);
};

export default Header;
