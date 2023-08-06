import './AllGenresPage.css';
import { useEffect, useState } from 'react';
import { getGenresApi } from '../../services/redux/slices/genres/genres';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import CheckboxMain from '../../components/CheckboxMain/CheckboxMain';
//import { GENRES } from '../../utils/constants';
import SaveButton from '../../components/SaveButton/SaveButton';
import PopupSaveButton from 'src/components/PopupSaveButton/PopupSaveButton';
import { IGenres } from 'src/types/Genres.types';

const AllGenresPage = ({ genres }: { genres: IGenres[] }) => {
	const [checked, setChecked] = useState(false);
	const [SaveButtonPopupOpen, setSaveButtonPopupOpen] = useState(false);
	const dispatch = useAppDispatch();
	const genre = useAppSelector((state) => state.genres.genres);

	const handleChange = () => {
		setChecked(!checked);
	};

	useEffect(() => {
		dispatch(getGenresApi());
	}, []);

	const handleSaveButtonClick = () => {
		setSaveButtonPopupOpen(!SaveButtonPopupOpen);
	};

	return (
		<section className="allgenrespage">
			<h2 className="title">Все жанры</h2>
			<ul className="allgenrespage__container">
				{genre.map((item) => (
					<li className="allgenrespage__list">
						<a className="allgenrespage__link" href="#">
							<img
								className="allgenrespage__img"
								alt={item.slug}
								src={item.picture}
							></img>
							<p className="allgenrespage__title">{item.title}</p>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default AllGenresPage;

//<CheckboxMain text={item.name} onChange={handleChange} />
