import './SearchResultPage.css';
import { useAppSelector } from 'src/hooks/redux';
import { SeachResult } from 'src/components/SeachResult/SeachResult';

export const SearchResultPage = () => {
	const films = useAppSelector((state) => state.films.films);

	return (
		<section className="search-result">
			<h1 className="search-result_title">Результаты поиска</h1>
			<p className="search-result_subtitle">По запросу: ужасы</p>
			<div className="search-page_container">
				{films.map((film) => (
					<SeachResult film={film} />
				))}
			</div>
		</section>
	);
};
