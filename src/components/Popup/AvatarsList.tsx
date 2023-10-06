import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { FC, useState } from 'react';
import Popup from './Popup';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { setSelectedAvatar } from 'src/services/redux/slices/avatars/avatars';
import { Avatars } from './Avatars';

export const AvatarsList: FC = () => {
	const images = useAppSelector((state) => state.avatars.images);

	return (
		<div className="popup__avatar-list">
			{images.map((item) => (
				<Avatars key={item.id} data={item} />
			))}
		</div>
	);
};
