import './CardBody.css'

const CardBody = ({ title, text, button, handleToggle }) => {

	const handleClick =(evt) => {
		evt.preventDefault();
		handleToggle(evt);
	}

	return (
		<section className='card-body'>
			<h4 className='card-header'>{title}</h4>
			<p className='card-text'>{text}</p>
			<button className='card-button' onClick ={handleClick}>{button}</button>
		</section>
	)
}

export default CardBody;