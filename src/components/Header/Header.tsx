import { FC } from 'react';
import { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import adjustments from '../../images/adjustments.svg';
import search from '../../images/search.svg';
import Account from '../Account/Account';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const setNavOpen = () => {
		setIsOpen(true);
	};

	const setNavClose = () => {
		setIsOpen(false);
	};
	return (
		<header className="header" id="header">
			<img
				className="header__logo"
				alt="лого"
				src={logo}
				onMouseOver={setNavOpen}
			/>
			<nav
				className={`header__content ${isOpen && 'header__content_open'}`}
				onMouseOver={setNavOpen}
				onMouseOut={setNavClose}
			>
				<ul className="header__list" onMouseOver={setNavOpen}>
					<Link to="/" className="header__content-link">
						Главная
					</Link>
					<Link to="/favorites" className="header__content-link">
						Наши подборки
					</Link>
					<Link to="/will-see" className="header__content-link">
						Фильмы по жанрам
					</Link>
				</ul>
			</nav>
			<form className="header__search">
				<input
					className="header__search-input"
					id="name"
					name="name"
					type="text"
					placeholder="Какой фильм вы хотите найти?"
				/>
				<button className="header__search-button">
					<img
						className="header__search-button_search"
						src={adjustments}
						alt="Кнопка расширенного поиска"
					/>
				</button>
				<button className="header__search-button">
					<img
						className="header__search-button_search"
						src={search}
						alt="Кнопка поиска"
					/>
				</button>
			</form>
			<Account
			// isLoggedIn={true}
			/>
		</header>
	);
};

export default Header;
