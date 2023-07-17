import "../Actors/Actors.css"
import Actors from '../Actors/Actors';

function ProducersList() {
    
   const director = [{
        id: 1,
        name: "Ричи Гай",
    },
    {
        id: 2,
        name: "Кристофер Нолан",
    },
    {
        id: 3,
        name: "Гай",
    }]

	return (
		<section className="actorslist">
			<h1 className="actorslist__title">Режиссеры</h1>
			<div className="actorslist__container">
				{director.map((item) => (
					<Actors key={item.id} name={item.name} picture={item.picture} />
				))}
			</div>
		</section>
	);
}

export default ProducersList;
