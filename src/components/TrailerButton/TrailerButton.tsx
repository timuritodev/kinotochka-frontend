import { useState } from 'react';
import './TrailerButton.css';
import PopupTrailer from 'src/components/PopupTrailer/PopupTrailer';

function TrailerButton() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const switchPopupTrailer = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<>
			<button className="moviepage__button" onClick={switchPopupTrailer}>
				<img
					className="moviepage__button_img"
					alt=""
					// src={icon}
				/>
				<span className="moviepage__button__text">Смотреть трейлер</span>
			</button>
			<PopupTrailer
				isPopupOpen={isPopupOpen}
				switchPopupTrailer={switchPopupTrailer}
			/>
		</>
	);
}

export default TrailerButton;
