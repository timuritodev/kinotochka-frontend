import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useState } from 'react';
import Popup from './Popup';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { setSelectedAvatar } from 'src/services/redux/slices/avatars/avatars';
import { AvatarsList } from './AvatarsList';

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
	const savedImage = useAppSelector((state) => state.avatars.savedImage);
	console.log(savedImage);
	const [selectedValue, setSelectedValue] = useState(0);

	const handleSaveAvatar = () => {
		const selectedImage = images.find((image) => image.id === selectedValue);
		console.log(selectedImage,2222)
		console.log(2222)

		dispatch(setSelectedAvatar(selectedImage)); // Сохраняем выбранную картинку
	};

	const handleChangeValue = (value: number) => {
		setSelectedValue(value); // Обновляем выбранный value при изменении радиокнопки
	};

	console.log(selectedValue);
	// const [value, setValue] = useState('');

	// const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setValue(event.target.value);
	// };
	// console.log(value, 1111)
	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<div className="popup__avatar">
				<h4 className="popup__title popup__title_type_avatar">
					Изменить аватарку
				</h4>
				<form>
					{/* <AvatarsList avatars={images} /> */}
					<AvatarsList
						avatars={images}
						value={selectedValue}
						changeValue={handleChangeValue}
					/>
					{/* <Button
						buttonText={'Сохранить'}
						// handleButtonClick={() => navigate('/')}
						type="button"
						onClick={() => handleSaveAvatar} 
						// disabled={value ? false : true}
						// handleButtonClick={handleChooseAvatar}
					/> */}
					<button
						type="button"
						className="popup__close-avatar"
						onClick={ handleSaveAvatar}
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
