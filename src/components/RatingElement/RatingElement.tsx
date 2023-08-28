import { FC, useEffect } from 'react';
import React, { useState } from 'react';
import './RatingElement.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	getMoviesRating,

} from 'src/services/redux/slices/rating/rating';
import { IRating } from 'src/types/Rating.types';
import { selectUser } from 'src/services/redux/slices/user/user';
import { getMoviebyidApi } from 'src/services/redux/slices/moviebyid/moviebyid';

const RatingElement: FC<IRating> = ({ id, rate }) => {
	const movie = useAppSelector((state) => state.movie.movie);
	//const rated: any = useAppSelector((state) => state.rating.movie_rating.rate) ;
	//const movieId: any = useAppSelector((state) => state.rating.movie_rating.id) ;
	
	const [rating, setRating] = useState(rate);
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const handleRatingClick = (value: React.SetStateAction<number>) => {
		setRating(value);
		if(rating===0){dispatch(
			getMoviesRating({
				id,
				rate: value,
				token: user.token,
				method: "POST",
			})
		);
		}
		else{
			dispatch(
				getMoviesRating({
					id,
					rate: value,
					token: user.token,
					method: "PUT",
				})
			);
		}
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
