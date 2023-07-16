import './RatedElement.css';
import img_kinopoisk from '../../images/rated_kinopoisk.svg';
import img_imdb from '../../images/rated_imdb.svg';

export const RatedElement = ({
	imdb,
	kinopoisk,
}: {
	imdb: number;
	kinopoisk: number;
}) => {
	return (
		<section className="rated">
			<div className="rated_row">
				<img className="rated_img" src={img_kinopoisk} alt="rated_kinopoisk" />
				<div>{kinopoisk}</div>
			</div>
			<div className="rated_row">
				<img className="rated_img" src={img_imdb} alt="rated_imdb" />
				<div>{imdb}</div>
			</div>
		</section>
	);
};
