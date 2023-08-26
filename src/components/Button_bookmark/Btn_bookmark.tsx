import './Btn_bookmark.css';
import img_bookmark_default from '../../images/btn_bookmark_default.svg';
import img_bookmark_pressed from '../../images/btn_bookmark_pressed.svg';
import img_watch_default from '../../images/btn_watch_default.svg';
import img_watch_pressed from '../../images/btn_watch_pressed.svg';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { addToFavoritesApi, deleteFromFavoritesApi, addToWatchApi, deleteFromWatchApi } from 'src/services/redux/slices/favorites/favorites';
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
		(state) => state.favoritemovies.watchlist.find((film) => film.id === id)?.is_need_see
	);
	const favorites = useAppSelector((state) => state.favoritemovies.favorites);
	const watchList = useAppSelector((state) => state.favoritemovies.watchlist)

	const handleClickFavorite = () => {
		const favoriteIds = favorites.map((film) => film.id);
		if (favoriteIds.includes(id)) {
			dispatch(deleteFromFavoritesApi({ id, token: user.token }))
		} else {
			dispatch(addToFavoritesApi({ id, token: user.token }))
		}
	}

	const handleClickWatch = () => {
		const watchIds = watchList.map((film) => film.id);
		if (watchIds.includes(id)) {
			dispatch(deleteFromWatchApi({ id, token: user.token }))
		} else {
			dispatch(addToWatchApi({ id, token: user.token }))
		}
	};

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
			onClick={
				nameTypes === 'favorite'
					? () => handleClickFavorite()
					: () => handleClickWatch()
			}
		>
			<div className="bookmark_fon" />
			<img className="bookmark_img" src={typesImg} alt="icon" />
		</section>
	);
};
