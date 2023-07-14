import './FlanksPage.css';
import React from 'react';
import { IFlanks } from "src/types/Flanks.types";
import { FC } from 'react';


const FlanksPage: FC<IFlanks> = ({ formName }) => {
    const title =
        formName === 'ratedFilms'
            ? 'Оцененные фильмы'
            : formName === 'willSee'
                ? 'Буду смотреть'
                : formName === 'favorites'
                    ? 'Избранные'
                    : 'Подборки'

    return (
        <section className="flank">
            <h1 className='flank_title'>{title}</h1>
            <section> 
                 {

                 }
            </section>
        </section>
    )
}

export default FlanksPage;
