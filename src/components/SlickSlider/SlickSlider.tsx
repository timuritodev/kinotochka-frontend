import './SlickSlider.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import { FC } from 'react';
import { IFilms } from 'src/types/Film.types';
import { ISlider } from 'src/types/Rating.types';
import { FilmCardSmall } from '../FilmCard180/FilmCardSmall';
import { getFilmsApi } from '../../services/redux/slices/films/films';

export const SlickSlider: FC<ISlider> = ({ type }) => {
	const dispatch = useAppDispatch();
	const films = useAppSelector((state) => state.films.films);

	const favorites = useAppSelector((state) => state.films.favoriteFilms);
	const willSee = useAppSelector((state) => state.films.mustSeeFilms);
	const ratedFilms = useAppSelector((state) => state.films.viewedFilms);
	const [data, setData] = useState<IFilms[]>(films);

	const settings =
		type === 'specialforyou' || type === 'news' || type === 'similar'
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
		dispatch(getFilmsApi());
	}, []);

	useEffect(() => {
		if (type === 'specialforyou') {
			setData(willSee);
		} else if (type === 'news') {
			setData(films);
		} else if (type === 'similar') {
			setData(films);
		} else if (type === 'oscar') {
			setData(favorites);
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
			: 'Черно-белое кино';

	return (
		<div className="slick-slider_container">
			<h1 className="slick-slider_title">{title}</h1>
			<Slider {...settings} className="slick-slider">
				{type === 'oscar' || type === 'blackwhite'
					? data.map((item) => <FilmCard film={item} />)
					: data.map((item) => <FilmCardSmall film={item} />)}
			</Slider>
		</div>
	);
};
