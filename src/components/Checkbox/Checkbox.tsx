import { FC, useState } from 'react';
import './Checkbox.css';

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
		<label className="checkbox">
			<input
				className="checkbox__input"
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				id={id}
			/>
			<span className="checkbox__appearance">{text}</span>
		</label>
	);
};

export default Checkbox;
