import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useEffect } from 'react';
import Popup from './Popup';

const ChangesSavedPopup: FC = () => {
	const navigate = useNavigate();

	return (
		<Popup>
			<h4 className="popup__title">Сохранить изменения</h4>
			<p className="popup__text">Изменения сохранены</p>
			<Button
				buttonText={'На Главную'}
				handleButtonClick={() => navigate('/')}
				type="button"
			/>
			<button className="popup__close" onClick={() => navigate(-1)}>
				Закрыть
			</button>
		</Popup>
	);
};

export default ChangesSavedPopup;
