import '../SlickSlider/SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ICompilationsTwo } from 'src/types/Compilations.types';
import { FilmCardSpecial } from '../../components/FilmCardSpecial/FilmCardSpecial'

export const SlickSliderSpecial: FC<ICompilationsTwo> = ({ title, movies, id }) => {


    const slidesToShow = ((window.innerWidth < 1280 && id) ? 3 : 5)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 4,
        arrows: true,
    };

    return (
        <div className="slick-slider_container">
            <h1 className="slick-slider_title">{title}</h1>
            <Slider {...settings} className="slick-slider">
                {movies.map((item) => (
                    <FilmCardSpecial key={item.id} film={item} />
                ))}
            </Slider>
        </div>
    );
};
