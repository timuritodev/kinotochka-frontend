import { FC } from 'react';
import { IAvatars } from 'src/types/Avatars.types';

export interface IAvatarProps {
	data: IAvatars;
	value: number;
	changeValue: any;
}

export const Avatars: FC<IAvatarProps> = ({ data, value, changeValue }) => {
	return (
		<label className="popup__label">
			<input
				type="radio"
				className="popup__avatar-input"
				name="avatar"
				value={data.id}
				onChange={() => changeValue(data.id)}
				checked={data.id === value}
			></input>
			<img className="popup__avatar-item" src={data.url}></img>
		</label>
	);
};
