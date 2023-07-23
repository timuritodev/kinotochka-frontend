// import Actors from './Actors';
import './ActorsList.css';
import { FC } from 'react';
import { ActorsListProps } from 'src/types/Rating.types';

const ActorsList: FC<ActorsListProps> = ({ actors }) => {
	return (
		<section className="actorslist">
			<h1 className="actorslist__title">Актеры</h1>
			<div className="actorslist__container">
				{actors.map((item, index) => (
					// <Actors name={item.first_name} surname={item.last_name}/>
					<p className="actorslist__text">
						{item.first_name} {item.last_name}
						{index !== actors.length - 1 ? ',' : ''}
					</p>
				))}
			</div>
		</section>
	);
};

export default ActorsList;
