import { Avatars } from './Avatars';
import { IAvatars } from 'src/types/Avatars.types';

export const AvatarsList = ({
	avatars,
	value,
	changeValue,
}: {
	avatars: IAvatars[];
	value: number;
	changeValue: any;
}) => {
	return (
		<div className="popup__avatar-list">
			{avatars.map((item) => (
				<Avatars
					key={item.id}
					data={item}
					value={value}
					changeValue={changeValue}
				/>
			))}
		</div>
	);
};
