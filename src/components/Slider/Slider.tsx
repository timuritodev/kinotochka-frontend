import { FC, useEffect, useRef, useState } from 'react';

import Checkbox from '../GenreCheckbox/GenreCheckbox';
import SliderController from '../SliderController1/SliderController1';

import { ISlider } from '../../types/Slider.types';
import { SliderControllerTypes } from '../../types/SliderController.types';

import { GENRES } from 'src/utils/constants';

import './Slider.css';

const Slider: FC<ISlider> = ({ contentType, content }) => {
	const [liIndex, setLiIndex] = useState<number>(0);
	const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
	const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

	const containerRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		setCanScrollLeft(liIndex <= 0);
		if (contentType === 'genresBlock') {
			setCanScrollRight(
				GENRES.length - liIndex <= 9 && GENRES.length - liIndex >= 0
			);
		}
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
		return contentType === 'genresBlock' &&
			GENRES.length - liIndex <= 9 &&
			GENRES.length - liIndex >= 0
			? setCanScrollRight(true)
			: setCanScrollRight(false);
	}

	const blockJSX = (
		<div className="slider slider_type_block">
			<ul
				className="slider__items-list slider__items-list_type_block"
				ref={containerRef}
			>
				{content.map((item) => (
					<li key={content.indexOf(item)}>
						<Checkbox text={item} />
					</li>
				))}
			</ul>
			<div className="slider__controllers">
				<SliderController
					direction={SliderControllerTypes.left}
					canScrollLeft={canScrollLeft}
					handleScroll={scrollList}
				/>
				<SliderController
					direction={SliderControllerTypes.right}
					canScrollRight={canScrollRight}
					handleScroll={scrollList}
				/>
			</div>
		</div>
	);

	const rowJSX = (
		<div className="slider slider_type_row">
			<SliderController
				direction={SliderControllerTypes.left}
				canScrollLeft={canScrollLeft}
				handleScroll={scrollList}
			/>
			<ul className="slider__items-list" ref={containerRef}>
				{GENRES.map((genre) => (
					<li key={GENRES.indexOf(genre)}>
						<Checkbox text={genre} />
					</li>
				))}
			</ul>
			<SliderController
				direction={SliderControllerTypes.right}
				canScrollRight={canScrollRight}
				handleScroll={scrollList}
			/>
		</div>
	);

	return contentType === 'genresBlock' ? blockJSX : rowJSX;
};

export default Slider;
