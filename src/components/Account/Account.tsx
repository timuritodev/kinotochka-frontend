import { FC } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';

const Account: FC = (isLoggedIn) => {
	return (
		<section className="account">
			{!isLoggedIn ? (
				<Link to="/sign-in" className="account__login">
					<p className="account__login-text">Войти</p>
				</Link>
			) : (
				<>
					<Link to="/profile" className="account__profile">
						<p className="account__profile-icon">
							<img
								className="account__profile-icon_img"
								src={profile}
								alt="профиль"
							/>
						</p>
					</Link>
				</>
			)}
		</section>
	);
};

export default Account;
