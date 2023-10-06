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
	const [selectedValue, setSelectedValue] = useState(0);

	const handleSaveAvatar = () => {
		const selectedImage = images.find((image) => image.id === selectedValue);
		dispatch(setSelectedAvatar(selectedImage));
	};

	const handleChangeValue = (value: number) => {
		setSelectedValue(value); 
	};

	return (
		<Popup isOpened={isOpened} setIsOpened={setIsOpened}>
			<div className="popup__avatar">
				<h4 className="popup__title popup__title_type_avatar">
					Изменить аватарку
				</h4>
				<form>
					<AvatarsList
						avatars={images}
						value={selectedValue}
						changeValue={handleChangeValue}
					/>
					<Button
						buttonText={'Сохранить'}
						type="button"
						handleButtonClick={handleSaveAvatar}
						disabled={selectedValue ? false : true}
					/>
					{/* <button
						type="button"
						className="popup__close-avatar"
						onClick={ handleSaveAvatar}
					>
						Сохранить
					</button> */}
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
