import { IImage } from 'src/types/Rating.types';
import { FC } from 'react';
import { useState } from 'react';
import './TrailerButton.css';
import PopupTrailer from 'src/components/PopupTrailer/PopupTrailer';
import play from "../../images/Play.svg";

const TrailerButton: FC<IImage> = ({ imageUrl }) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const switchPopupTrailer = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <button className="trailer__button" onClick={switchPopupTrailer}>
                <img className='trailer__img' alt='' src={imageUrl}/>
                <img className='add__img'  alt='' src={play}/>
            </button>
            <PopupTrailer
                isPopupOpen={isPopupOpen}
                switchPopupTrailer={switchPopupTrailer}
            />
        </>
    );
}

export default TrailerButton;
