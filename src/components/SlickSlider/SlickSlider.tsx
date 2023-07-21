import './SlickSlider.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppSelector } from 'src/hooks/redux';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import CustomPrevArrow from "../../images/ArrowPrev.svg";
import CustomNextArrow from "../../images/ArrowNext.svg";

export const SlickSlider = () => {

    const films = useAppSelector((state) => state.films.films)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
    };

    return (
        <Slider {...settings} className='slick-slider'>
            {films.map((film) => (
                <FilmCard film={film} />
            ))}
        </Slider>
    );
};
