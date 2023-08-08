import './OneGenrePage.css';
import { useEffect, FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';



const OneGenrePage: FC = () => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);
	const dispatch = useAppDispatch();
	const filmsBygenre = useAppSelector((state) => state.films);
	console.log(filmsBygenre)
	return (
		<section className="allgenrespage">
			{}
		</section>
	);
};

export default OneGenrePage;
