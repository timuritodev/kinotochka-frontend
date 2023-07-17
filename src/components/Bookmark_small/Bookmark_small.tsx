import './Bookmark_small.css';
import img_default from '../../images/btn_bookmark_default.svg';
import img_pressed from '../../images/btn_bookmark_pressed.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateFavorite } from 'src/services/redux/slices/films/films';

export const BookmarkSmall = ({ id }: { id: string }) => {

	const dispatch = useAppDispatch();
	const filmFav = useAppSelector(state => state.films.films.find(film => film.id === id)?.is_favorite);

	const handleClick = () => {
		dispatch(updateFavorite({ favorite: !filmFav, id }));
	};


	return (
		<section>
			<img
				className='bookmark'
				src={filmFav
					? img_pressed
					: img_default}
				alt="favorite"
				onClick={handleClick}
			/>
		</section>
	);
};
