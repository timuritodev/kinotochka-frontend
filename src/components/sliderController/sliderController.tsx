import { FC, useEffect, useRef, useState } from 'react';
import './sliderController.css';

export enum SliderControllerTypes {
	left = 'left',
	right = 'right',
}

interface ISliderController {
	direction: SliderControllerTypes;
	canScrollLeft?: boolean;
	canScrollRight?: boolean;
	handleScroll: any;
}

const SliderController: FC<ISliderController> = ({
	direction,
	canScrollLeft,
	canScrollRight,
	handleScroll,
}) => {
	return (
		<button
			disabled={direction === 'left' ? canScrollLeft : canScrollRight}
			id={direction}
			onClick={() => handleScroll(direction)}
			className={`slider-controller slider-controller_direction_${direction}`}
			type="button"
		></button>
	);
};

export default SliderController;
