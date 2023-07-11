import { FC } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.css';
export const Layout: FC = () => {
	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
