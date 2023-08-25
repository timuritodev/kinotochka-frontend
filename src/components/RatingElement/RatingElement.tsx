import { FC } from 'react';
import React, { useState } from 'react';
import './RatingElement.css';
import { IRating } from 'src/types/Rating.types';
import { useAppDispatch } from 'src/services/typeHooks';
import { getMoviesRating } from 'src/services/redux/slices/rating/rating';

const RatingElement: FC<IRating> = ({ id,rate })=>  {
	const [rating, setRating] = useState(rate);
	const dispatch = useAppDispatch();
	//const movie = useAppSelector((state) => state.movie_rating.movie_rating);
	
	
	const handleRatingClick = (value: React.SetStateAction<number>) => {
		setRating(value);
		
		dispatch(getMoviesRating({
			id,
			rate: value,
			
		}))
		
	};

	return (
		<div className="rating-element">
			<h2 className="rating-element__text">Ваша оценка - {rating}</h2>
			<div className="rating-element__container">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
					<div
						key={value}
						className={`star__button ${
							rating >= value ? 'star__button__filled' : ''
						}`}
						onClick={() => handleRatingClick(value)}
					/>
				))}
			</div>
		</div>
	);
};

export default RatingElement;
