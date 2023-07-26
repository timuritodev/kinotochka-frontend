import './PreferencesPage.css';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { FC } from 'react';


const PreferencesPage: FC = () => {

    const dispatch = useAppDispatch();

    return (
<section className="preferencespage">
<div className="preferencespage__container">
    </div>
		</section>
    );

};



export default PreferencesPage;
