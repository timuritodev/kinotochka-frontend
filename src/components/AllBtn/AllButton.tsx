import './AllButton.css';

export const AllButton = ({
	onClick,
}: {
	onClick: React.MouseEventHandler;
}) => {
	return (
		<button className="cards__button" type="button" onClick={onClick}>
			Показать все
		</button>
	);
};
