import './OneGenrePage.css';
import { useEffect, FC, useState } from 'react';


const OneGenrePage: FC = ( GenreLinkClick) => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	const handleSaveButtonClick = () => {
		setSaveButtonPopupOpen(!SaveButtonPopupOpen);
	};

	return (

		<div>1</div>
	);
};

export default OneGenrePage;
