import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useEffect } from 'react';
import Popup from './Popup';

interface IChangesSavedPopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangesSavedPopup: FC<IChangesSavedPopup> = ({
	isOpened,
	setIsOpened,
}) => {
	const navigate = useNavigate();

	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<h4 className="popup__title profile__title_type_saved-changes">
				Сохранить изменения
			</h4>
			<p className="popup__text profile__text_type_saved-changes">
				Изменения сохранены
			</p>
			<Button
				buttonText={'На Главную'}
				handleButtonClick={() => navigate('/')}
				type="button"
			/>
			<button
				className="popup__close popup__close_type_saved-changes"
				onClick={() => setIsOpened(false)}
			>
				Закрыть
			</button>
		</Popup>
	);
};

export default ChangesSavedPopup;
