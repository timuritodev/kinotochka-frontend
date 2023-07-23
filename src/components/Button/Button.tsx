import { FC } from 'react';

import './Button.css';

export interface IButton {
	buttonText: string;
	handleButtonClick: any;
}
const Button: FC<IButton> = ({ buttonText, handleButtonClick }) => {
	return (
		<button
			className="button"
			// disabled
			type="button"
			onClick={handleButtonClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
