import { FC, useEffect, useRef, useState } from 'react';
import './GenresSlider.css';
import Checkbox from '../Checkbox/Checkbox';

const genres = [
	'комедии',
	'мультфильмы',
	'ужасы',
	'фантастика',
	'триллеры',
	'боевики',
	'мелодрамы',
	'детективы',
	'приключения',
	'фентези',
	'военные',
	'семейные',
	'драмы',
	'исторические',
	'документальные',
	'биографии',
	'криминал',
	'вестерн',
	'спорт',
	'мьюзиклы',
	'токшоу',
	'аниме',
];

const GenresSlider: FC = () => {
	const [liIndex, setLiIndex] = useState<number>(0);
	const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
	const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

	const containerRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		setCanScrollLeft(liIndex <= 0);
		setCanScrollRight(
			genres.length - liIndex <= 9 && genres.length - liIndex >= 0
		);
	}, [liIndex]);

	function scrollList(direction: string) {
		const listNode = containerRef.current;
		if (listNode && direction === 'left') {
			setLiIndex(liIndex - 9);
			listNode.scrollBy({
				behavior: 'smooth',
				left: -570,
			});
		}
		if (listNode && direction === 'right') {
			setLiIndex(liIndex + 9);
			listNode.scrollBy({
				behavior: 'smooth',
				left: 570,
			});
		}
		return genres.length - liIndex <= 9 && genres.length - liIndex >= 0
			? setCanScrollRight(true)
			: setCanScrollRight(false);
	}

	return (
		<>
			<div>
				<ul className="genres-slider__checkboxes-container" ref={containerRef}>
					{genres.map((genre) => (
						<li key={genres.indexOf(genre)}>
							<Checkbox text={genre} />
						</li>
					))}
				</ul>
			</div>
			<div className="genres-slider__controllers">
				<button
					disabled={canScrollLeft}
					id="left"
					onClick={() => {
						scrollList('left');
					}}
					className="genres-slider__controller genres-slider__controller_direction_left"
					type="button"
				></button>
				<button
					disabled={canScrollRight}
					id="right"
					onClick={() => {
						scrollList('right');
					}}
					className="genres-slider__controller genres-slider__controller_direction_right"
					type="button"
				></button>
			</div>
		</>
	);
};

export default GenresSlider;
