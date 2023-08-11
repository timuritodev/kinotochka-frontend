import { useNavigate } from 'react-router';
import { FC, ReactNode, useEffect } from 'react';

import './Popup.css';

interface IPopup {
	children: ReactNode;
}

const Popup: FC<IPopup> = ({ children }) => {
	const navigate = useNavigate();

	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
			navigate(-1);
		}
	};

	useEffect(() => {
		const handleEscClick = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				navigate(-1);
			}
		};

		document.addEventListener('keydown', handleEscClick);

		return () => document.removeEventListener('keydown', handleEscClick);
	}, []);

	return (
		<div className="popup" onClick={handleOverlayClick}>
			<div className="popup__container">{children}</div>
		</div>
	);
};

export default Popup;
