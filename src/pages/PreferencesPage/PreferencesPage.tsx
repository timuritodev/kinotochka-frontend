import './PreferencesPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FC } from 'react';
import { GENRES } from '../../utils/constants';
import  SaveButton  from '../../components/SaveButton/SaveButton';

const PreferencesPage: FC = () => {
	

	return (
		<section className="preferencespage">
			<h2 className='title'>Мои предпочтения</h2>
			<h3 className='subtitle'>Избранные жанры</h3>
			<ul className="preferencespage__container">
				{GENRES.map((genre) => {
					return <li className="preferencespage__list">{genre}</li>;
				})}
			</ul>
			<SaveButton buttonText='Сохранить' handleButtonClick={undefined} />
		</section>
	);
};

export default PreferencesPage;
