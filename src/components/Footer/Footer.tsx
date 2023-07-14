import { FC } from 'react';
import './Footer.css';
import scroll from '../../images/scroll.svg';

const Footer: FC = () => {
	return (
		<footer className="footer">
			<h4 className="footer__desc">© 2023 КиноТочка. Все права защищены.</h4>
			<a href="#header" className="footer__scroll">
				<img
					className="footer__scroll-button"
					alt="скролл вверх"
					src={scroll}
				/>
			</a>
		</footer>
	);
};

export default Footer;
