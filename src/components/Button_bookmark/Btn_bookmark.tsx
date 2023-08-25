import './Btn_bookmark.css';
import img_bookmark_default from '../../images/btn_bookmark_default.svg';
import img_bookmark_pressed from '../../images/btn_bookmark_pressed.svg';
import img_watch_default from '../../images/btn_watch_default.svg';
import img_watch_pressed from '../../images/btn_watch_pressed.svg';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	updateFavorite,
	updateWatch,
} from 'src/services/redux/slices/films/films';
import { addToFavoritesApi, deleteFromFavoritesApi } from 'src/services/redux/slices/favorites/favorites';
import { selectUser } from '../../services/redux/slices/user/user';

export const BtnBookmark = ({
	nameTypes,
	id,
}: {
	nameTypes: string;
	id: number;
}) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const filmFav = useAppSelector(
		(state) => state.favoritemovies.favorites.find((film) => film.id === id)?.is_favorite
	);
	const filmWatch = useAppSelector(
		(state) => state.movies.movies.find((film) => film.id === id)?.is_need_see
	);
	const favorites = useAppSelector((state) => state.favoritemovies.favorites);
	
	const handleClickFavorite = () => {
		const favoriteIds = favorites.map((film)=>film.id);
		console.log(favoriteIds)
		if(favoriteIds.includes(id))
		{
			dispatch(deleteFromFavoritesApi({id, token: user.token}))
		} else {
			dispatch(addToFavoritesApi({id, token: user.token}))
		}
	}

	const typesImg =
		nameTypes === 'favorite'
			? filmFav
				? img_bookmark_pressed
				: img_bookmark_default
			: filmWatch
			? img_watch_pressed
			: img_watch_default;

	return (
		<section
			className="bookmark_favorite"
			onClick={handleClickFavorite}
		>
			<div className="bookmark_fon" />
			<img className="bookmark_img" src={typesImg} alt="icon" />
		</section>
	);
};
