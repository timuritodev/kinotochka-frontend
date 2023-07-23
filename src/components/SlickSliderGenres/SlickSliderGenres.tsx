import './SlickSliderGenres.css';
import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FilmCard } from '../FilmCardWidth255/FilmCard';
import { IFilms } from 'src/types/Film.types';
import { FC } from 'react';
import { ISlider } from 'src/types/Rating.types';
import { FilmCardSmall } from '../FilmCard180/FilmCardSmall';
import CheckboxMain from '../CheckboxMain/CheckboxMain';
import { useAppSelector } from 'src/hooks/redux';

export const SlickSliderGenres = ({ content }: { content: string[] }) => {
    const films = useAppSelector((state) => state.films.films)
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows: true,
    };

    const handleCheckboxChange = (text: string) => {
        if (selectedGenres.includes(text)) {
            setSelectedGenres(selectedGenres.filter(item => item !== text));
        } else {
            setSelectedGenres([...selectedGenres, text]);
        }
    };

    // const filteredFilms = films.filter((film) => {
    //     return selectedGenres.map((genre) => {
    //         return film.genres.map((item) => {
    //             if(item == genre) {
    //                 return film
    //             }
    //         })
    //     });
    // });

    const filteredFilms = selectedGenres.length > 0 ? films.filter((film) => {
        return selectedGenres.some(genre => film.genres.includes(genre));
    }) : films;


    return (
        <div>
            <Slider {...settings} className='slick-slider'>
                {content.map((item) => (
                    <li key={content.indexOf(item)} className='main-page_color-white'>
                        <CheckboxMain text={item} onChange={handleCheckboxChange} />
                    </li>
                ))}
            </Slider>
            <div className="flank_container">
                {filteredFilms.map((film) => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </div>
        </div>
    )
}
