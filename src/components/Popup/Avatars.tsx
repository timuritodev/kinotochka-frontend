import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { useState } from 'react';
import Popup from './Popup';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { setSelectedAvatar } from 'src/services/redux/slices/avatars/avatars';
import { IAvatars } from 'src/types/Avatars.types';

// export const Avatars = ({ data, value, changeValue }: {data: IAvatars, value: number, changeValue: any}) => {
export const Avatars = ({ data }: { data: IAvatars }) => {
	return (
		<label className="popup__label">
			<input
				type="radio"
				className="popup__avatar-input"
				name="avatar"
				value={data.id}
				// onChange={changeValue}
			></input>
			<img className="popup__avatar-item" src={data.url}></img>
		</label>
	);
};
