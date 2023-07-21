import { FC, useState } from 'react';
import './GenreCheckbox.css';

interface ICheckbox {
	text: string;
	id?: string;
}

const Checkbox: FC<ICheckbox> = ({ text, id }) => {
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<label className="genre-checkbox">
			<input
				className="genre-checkbox__input"
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				id={id}
			/>
			<span className="genre-checkbox__appearance">{text}</span>
		</label>
	);
};

export default Checkbox;
