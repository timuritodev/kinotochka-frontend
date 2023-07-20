import { FC } from 'react';
import { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

const Account: FC = (isLoggedIn) => {
	const [isOpen, setIsOpen] = useState(false);

	const setProfileOpen = () => {
		setIsOpen(true);
	};

	const setProfileClose = () => {
		setIsOpen(false);
	};

	return (
		<section className="account">
			{!isLoggedIn ? (
				<Link to="/sign-in" className="account__login">
					<p className="account__login-text">Войти</p>
				</Link>
			) : (
				<>
					<p className="account__profile-icon" onMouseOver={setProfileOpen}>
						<Link to="/profile" className="account__profile-link">
							<p className="account__profile-word">W</p>
						</Link>
					</p>
					<nav
						className={`account__content ${isOpen && 'account__content_open'}`}
						onMouseOver={setProfileOpen}
						onMouseOut={setProfileClose}
					>
						<ul className="account__list" onMouseOver={setProfileOpen}>
							<p className="account__content-nik">Никнейм</p>
							<p className="account__content-email">mail@google.com</p>
							<Link to="/movie-page" className="account__content-link">
								Страница фильма
							</Link>
							<Link to="/favorites" className="account__content-link">
								Избранное
							</Link>
							<Link to="/will-see" className="account__content-link">
								Буду смотреть
							</Link>
							<Link to="/rated-films" className="account__content-link">
								Оцененное
							</Link>
							<Link to="/collections" className="account__content-link">
								Подборки
							</Link>
							<Link to="/logout" className="account__content-link">
								Выйти
							</Link>
						</ul>
					</nav>
				</>
			)}
		</section>
	);
};

export default Account;