import './Actors.css';

function Actors({ name }) {
	return (
		<section className="actor">
			<p className="actor__text">{name},</p>
		</section>
	);
}

export default Actors;
