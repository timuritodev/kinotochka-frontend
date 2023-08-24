import { FC } from 'react';
import { useState } from 'react';
import './Account.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser, signOut } from 'src/services/redux/slices/user/user';

const Account: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const [isOpen, setIsOpen] = useState(false);

	const setProfileOpen = () => {
		setIsOpen(true);
	};

	const setProfileClose = () => {
		setIsOpen(false);
	};

	const { email } = useAppSelector(selectUser);

	return (
		<section className="account">
			{!user.email[0] ? (
				<Link to="/sign-in" className="account__login">
					<p className="account__login-text">Войти</p>
				</Link>
			) : (
				<>
					<p className="account__profile-icon" onMouseOver={setProfileOpen}>
						<Link to="/profile" className="account__profile-link">
							<p className="account__profile-word">{email[0]}</p>
						</Link>
					</p>
					<nav
						className={`account__content ${isOpen && 'account__content_open'}`}
						onMouseOver={setProfileOpen}
						onMouseOut={setProfileClose}
					>
						<ul className="account__list" onMouseOver={setProfileOpen}>
							<p className="account__content-nik">{email}</p>
							<p className="account__content-email">{email}</p>
							{/* <Link to="/sign-in" className="account__content-link">
								Авторизация
							</Link>
							<Link to="/movie-page" className="account__content-link">
								Страница фильма
							</Link> */}
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
							<button
								className="account__content-button"
								onClick={() => {
									dispatch(signOut());
									navigate('/');
								}}
							>
								Выйти
							</button>
						</ul>
					</nav>
				</>
			)}
		</section>
	);
};

export default Account;
