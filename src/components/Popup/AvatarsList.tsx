import { Avatars } from './Avatars';
import { IAvatars } from 'src/types/Avatars.types';

export const AvatarsList = ({ avatars }: { avatars: IAvatars[] }) => {
	return (
		<div className="popup__avatar-list">
			{avatars.map((item) => (
				<Avatars key={item.id} data={item} />
			))}
		</div>
	);
};
