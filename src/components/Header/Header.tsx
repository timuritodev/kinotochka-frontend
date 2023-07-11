import { FC } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	return (
		<header className="header">
			<Link to="/">to main</Link>
		</header>
	);
};

export default Header;
