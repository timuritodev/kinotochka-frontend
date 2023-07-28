import './PreferencesPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FC } from 'react';
import { GENRES } from '../../utils/constants' ;

const PreferencesPage: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<section className="preferencespage">
			<ul className="preferencespage__container">
			{GENRES.map((genre) => {
            return (
              <li className='preferencespage__list'>{genre}</li>
            );
          })}
			</ul>
		</section>
	);
};

export default PreferencesPage;
