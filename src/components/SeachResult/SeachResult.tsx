import './SeachResult.css';
import { IFilms } from 'src/types/Film.types';
import { RatedElement } from '../RatedElement/RatedElement';
import { IMovieCard } from 'src/types/MovieCard.types';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectUser } from 'src/services/redux/slices/user/user';
import { useNavigate } from 'react-router';
import {
	getMoviebyidApi,
	getMoviebyidTokenApi,
} from 'src/services/redux/slices/moviebyid/moviebyid';
import { BookmarkSmall } from '../Bookmark_small/Bookmark_small';
import { useState } from 'react';

export const SeachResult = ({ film }: { film: IMovieCard }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const [imgHover, setImgHover] = useState(false);

	const handleImgClick = () => {
		if (user.token) {
			dispatch(getMoviebyidTokenApi({ filmId: film.id, token: user.token }));
		} else {
			dispatch(getMoviebyidApi(film.id));
		}
		navigate('/movie-page');
		window.scrollTo(0, 0);
	};

	function handleImgHover() {
		setImgHover(true);
	}

	function handleImgLeave() {
		setImgHover(false);
	}

	return (
		<section className="search">
			<div className="search_img-container">
				<div
					className="search-img-background"
					onClick={handleImgClick}
					onMouseEnter={handleImgHover}
					onMouseLeave={handleImgLeave}
				>
					<img className="search_img" src={film.v_picture} alt="" />
				</div>
				<div className="button__container">
					<BookmarkSmall id={film.id} />
				</div>
			</div>
			<div className="search_profile">
				<h1
					className="search_title"
					style={{ color: imgHover ? '#FC3' : 'white' }}
				>
					{film.title}
				</h1>
				<h3 className="search_h3">{`${film.genres.join(', ')} • ${
					film.year
				}`}</h3>
				{/* <h3 className="search_h3">{film.country.join(', ')}</h3> */}
				{/* <h3 className="search_h3">{`Режисер: ${film.director
					.map((dir) => dir.first_name + ' ' + dir.last_name)
					.join(', ')}`}</h3>
				<h3 className="search_h3">{`В ролях: ${film.actor
					.map((actor) => actor.first_name + ' ' + actor.last_name)
					.join(', ')}`}</h3> */}
				<RatedElement
					imdb={film.rating.rate_imdb}
					kinopoisk={film.rating.rate_kinopoisk}
					isSearch={false}
				/>
			</div>
		</section>
	);
};
