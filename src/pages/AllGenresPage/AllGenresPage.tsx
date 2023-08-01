import './AllGenresPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FC, useState } from 'react';
import CheckboxMain from '../../components/CheckboxMain/CheckboxMain';
import { GENRES } from '../../utils/constants';
import SaveButton from '../../components/SaveButton/SaveButton';
import PopupSaveButton from 'src/components/PopupSaveButton/PopupSaveButton';

const AllGenresPage: FC = () => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	const handleSaveButtonClick = () => {
		setSaveButtonPopupOpen(!SaveButtonPopupOpen);
	};

	return (
		<section className="allgenrespage">
			<h2 className="title">Все жанры</h2>
			<ul className="allgenrespage__container">
				{GENRES.map((genre) => (
					<li className="allgenrespage__list">
						<CheckboxMain text={genre} onChange={handleChange} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default AllGenresPage;
