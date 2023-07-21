import './SlickSlider.css';
import React from 'react';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppSelector, useAppDispatch } from 'src/hooks/redux';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import CustomPrevArrow from "../../images/ArrowPrev.svg";
import CustomNextArrow from "../../images/ArrowNext.svg";
import { FC } from 'react';
import { IFilms } from 'src/types/Film.types';
import { SlickSliderTypes } from 'src/types/Rating.types';
import { FilmCardSmall } from '../FilmCard180/FilmCardSmall';
import { getFilmsApi } from '../../services/redux/slices/films/films';

export const SlickSlider = ({ type }: { type: string }) => {
    const dispatch = useAppDispatch();

    const selected = useAppSelector((state) => state.selection.selections);
    const favorites = useAppSelector((state) => state.films.favoriteFilms);
    const willSee = useAppSelector((state) => state.films.mustSeeFilms);
    const ratedFilms = useAppSelector((state) => state.films.viewedFilms);
    const [data, setData] = useState<IFilms[]>([]);
    const films = useAppSelector((state) => state.films.films)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
    };
    useEffect(() => {
        dispatch(getFilmsApi());
    }, []);

    useEffect(() => {
        if (type === 'specialforyou') {
            setData(films)
        } else if (type === 'news') {
            setData(films)
        } else if (type === 'similar') {
            setData(films)
        } else if (type === 'oscars') {
            setData(films)
        } else {
            setData(films)
        }
    }, [films]);

    // console.log(films, 'films')
    // console.log(data, 'data')
    console.log(typeof data)
    console.log(typeof films)


    return (
        <Slider {...settings} className='slick-slider'>
            {data.map((item) => (
                <FilmCardSmall film={item} />
            ))}
        </Slider>
    );
};
