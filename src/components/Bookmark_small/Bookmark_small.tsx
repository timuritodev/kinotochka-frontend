import './Bookmark_small.css'
import { useState } from 'react';
import img_default from '../../images/btn_bookmark_default.svg';
import img_hover from '../../images/btn_bookmark_hover.svg';
import img_pressed from '../../images/btn_bookmark_pressed.svg';

export const BookmarkSmall = () => {
	const [imgSrc, setImgSrc] = useState(img_default);

	const handleHover = () => {
		setImgSrc(img_hover);
	};

	const handlePress = () => {
		setImgSrc(img_pressed);
	};

	const handleRelease = () => {
		setImgSrc(img_default);
	};

	return (
		<section>
			<img
				src={imgSrc}
				alt=""
				onMouseOver={handleHover}
				onMouseDown={handlePress}
				onMouseUp={handleRelease}
				onMouseLeave={handleRelease}
			/>
		</section>
	);
};
