import { FC, useState } from 'react';
import './CheckboxMain.css';
import { IGenresIcons } from 'src/types/GenresIcons.types';



	export default function GenresIconsFunc({ genre }: { genre: IGenresIcons }) {

	return (
		<label className="genre-checkbox">
			<input
				className="genre-checkbox__input"
				type="checkbox"
			/>
			<div className="genre-checkbox__appearance">
			<img src={genre.picture} alt={genre.title} />{genre.title}
			</div>
		</label>
	);
}

