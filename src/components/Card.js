import { useState } from 'react';
import CardBody from "./CardBody/CardBody";

const Card = ( props ) => {

	const [hidden, setHidden] = useState(false);

	const handleToggle = () => {setHidden(prev => !prev)};

	return (
		<div className='card'>
		{props.children(hidden)}
		<CardBody {...props} handleToggle={handleToggle}>
		</CardBody>
      </div>
	)
}

export default Card