import "./BackgroundImage.css";
import { IImage } from 'src/types/Rating.types';
import { FC } from 'react';

const BackgroundImage: FC<IImage> = ({ imageUrl }) => {
    return (
        <img className="background-image" alt="" src={imageUrl} />
    );
}

export default BackgroundImage;
