import { FC } from 'react';

import './PopupSaveButton.css';

export interface IButton {
	handleButtonClick: any;
    isPopupOpen: any;
}
const PopupSaveButton: FC<IButton> = ({ handleButtonClick, isPopupOpen }) => {
	return (
        <section className={isPopupOpen ? "popupsavebutton-container popupsavebutton-container_open" : 'popupsavebutton'}>
        <button
			className='button_close'
			// disabled
			type="button"
			onClick={handleButtonClick}
		>
			На Главную
		</button>
        <button
			className='button__main'
			// disabled
			type="button"
			onClick={handleButtonClick}
		>
			Закрыть
		</button>
        
        </section>
	);
};

export default PopupSaveButton;
