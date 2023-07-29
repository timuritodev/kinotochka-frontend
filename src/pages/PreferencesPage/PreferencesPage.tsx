import './PreferencesPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FC, useState } from 'react';
import CheckboxMain from '../../components/CheckboxMain/CheckboxMain';
import { GENRES } from '../../utils/constants';
import SaveButton from '../../components/SaveButton/SaveButton';


const PreferencesPage: FC = () => {

	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<section className="preferencespage">
			<h2 className="title">Мои предпочтения</h2>
			<h3 className="subtitle">Избранные жанры</h3>
			<ul className="preferencespage__container">
				{GENRES.map((genre) => (
					
			<li className="preferencespage__list">
			<CheckboxMain text={genre} onChange={handleChange} />
			</li>		
				))}
			</ul>
			<SaveButton buttonText="Сохранить" handleButtonClick={undefined} />
		</section>
	);
};

export default PreferencesPage;

