import './SlickSlider.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import { FC } from 'react';
import { ISlider } from 'src/types/Rating.types';
import { FilmCardLarge } from '../FilmCardLarge/FilmCardLarge';
import { FilmCardSmall } from '../FilmCardWidth180/FilmCardSmall';
import { getNewMovieCardsApi } from 'src/services/redux/slices/newmoviecards/newmoviecards';
import { IMovieCard } from 'src/types/MovieCard.types';

export const SlickSlider: FC<ISlider> = ({ type }) => {
	const dispatch = useAppDispatch();
	const films = useAppSelector((state) => state.movies.movies);
	const [data, setData] = useState<IMovieCard[]>(films);

	// const favorites = useAppSelector((state) => state.films.favoriteFilms);
	// const willSee = useAppSelector((state) => state.films.mustSeeFilms);
	// const ratedFilms = useAppSelector((state) => state.films.viewedFilms);

	const newmovies = useAppSelector((state) => state.newmoviecards.movies);
	const oscar = useAppSelector((state) => state.compilations.data[0])
	const similar = useAppSelector((state) => state.compilations.data[1])
	const specialforyou = useAppSelector((state) => state.compilations.data[2])

	const settings =
		type === 'news' || type === 'similar'
			? {
					dots: false,
					infinite: true,
					speed: 500,
					slidesToShow: 5,
					slidesToScroll: 3,
					arrows: true,
			  }
			: {
					dots: false,
					infinite: true,
					speed: 500,
					slidesToShow: 4,
					slidesToScroll: 4,
					arrows: true,
			  };

	useEffect(() => {
		if (type === 'specialforyou') {
			setData(films);
		} else if (type === 'news') {
			setData(newmovies);
		} else if (type === 'similar') {
			setData(films);
		} else if (type === 'oscar') {
			setData(films);
		} else {
			setData(films);
		}
	}, []);

	const title =
		type === 'news'
			? 'Новинки'
			: type === 'specialforyou'
			? 'Специально для вас'
			: type === 'oscar'
			? 'Оскар 2023'
			: type === 'similar'
			? 'Похожие'
			: type === 'blackwhite'
			? 'Черно-белое кино'
			: 'Новогоднее кино';

	const asdw =
		type === 'specialforyou'
			? data.map((item) => <FilmCardLarge film={item} />)
			: data.map((item) => <FilmCardSmall film={item} />);

	return (
		<div className="slick-slider_container">
			<h1 className="slick-slider_title">{title}</h1>
			<Slider {...settings} className="slick-slider">
				{type === 'oscar' || type === 'blackwhite' || type === 'newyear'
					? data.map((item) => <FilmCard film={item} />)
					: asdw}
			</Slider>
		</div>
	);
};
