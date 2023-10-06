import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useEffect, useState } from 'react';
import Popup from './Popup';
import comedy from '../../images/avatar/comedy.svg';
import cartoon from '../../images/avatar/cartoon.svg';
import horror from '../../images/avatar/horror.svg';
import fantastic from '../../images/avatar/fantastic.svg';
import thrilleer from '../../images/avatar/thriller.svg';
import anime from '../../images/avatar/anime.svg';
import melodrama from '../../images/avatar/melodrama.svg';
import drama from '../../images/avatar/drama.svg';
import family from '../../images/avatar/family.svg';

interface IChangesAvatarPopup {
	isOpened: boolean;
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeAvatarPopup: FC<IChangesAvatarPopup> = ({
	isOpened,
	setIsOpened,
}) => {
	const [value, setValue] = useState('');

	const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

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
								value="comedy"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={comedy}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="cartoon"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={cartoon}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="horror"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={horror}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="fantastic"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={fantastic}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="thriller"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={thrilleer}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="anime"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={anime}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="melodrama"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={melodrama}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="drama"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={drama}></img>
						</label>
						<label className="popup__label">
							<input
								type="radio"
								className="popup__avatar-input"
								name="avatar"
								value="family"
								onChange={changeValue}
							></input>
							<img className="popup__avatar-item" src={family}></img>
						</label>
					</div>
					<Button
						buttonText={'Сохранить'}
						// handleButtonClick={() => navigate('/')}
						type="button"
						disabled={value ? false : true}
						// handleButtonClick={handleChooseAvatar}
					/>
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
