import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useState } from 'react';
import Popup from './Popup';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { setSelectedAvatar } from 'src/services/redux/slices/avatars/avatars';

interface IChangesAvatarPopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeAvatarPopup: FC<IChangesAvatarPopup> = ({
	isOpened,
	setIsOpened,
}) => {
	const dispatch = useAppDispatch();

	const images = useAppSelector((state) => state.avatars.images);

	const handleSaveAvatar = (selectedId: any) => {
		// В этой функции добавьте логику для сохранения выбранной картинки
		// selectedId - это id выбранной картинки
		console.log(selectedId, 2222)
		const selectedImage = images.find((image) => image.id.toString === selectedId);
	  
		if (selectedImage) {
		  dispatch(setSelectedAvatar(selectedImage)); // Сохраняем выбранную картинку
		}
	  };
	  

	const [value, setValue] = useState('');

	const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	console.log(value, 1111)
	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<div className="popup__avatar">
				<h4 className="popup__title popup__title_type_avatar">
					Изменить аватарку
				</h4>
				<form>
					<div className="popup__avatar-list">
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="1"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[0].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="2"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[1].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="horror"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[2].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="fantastic"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[3].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="thriller"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[4].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="anime"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[5].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="melodrama"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[6].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="drama"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[7].url}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="family"
								// onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={images[8].url}></img>
						</label>
					</div>
					{/* <Button
						buttonText={'Сохранить'}
						// handleButtonClick={() => navigate('/')}
						type="button"
						onClick={() => handleSaveAvatar} 
						// disabled={value ? false : true}
						// handleButtonClick={handleChooseAvatar}
					/> */}
					<button
					className="popup__close-avatar"
					onClick={() => handleSaveAvatar(value)} 
				>
					Сохранить
				</button>
				</form>
				<button
					className="popup__close-avatar"
					onClick={() => setIsOpened(false)}
				>
					Отменить
				</button>
			</div>
		</Popup>
	);
};

export default ChangeAvatarPopup;
