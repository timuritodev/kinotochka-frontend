import { FC } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import Account from '../Account/Account'

const Header: FC = () => {
	return (
		<header className="header" id="header">
			<img className="header__logo" alt="лого" src={logo} />
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
		</header>
	);
};

export default Header;
