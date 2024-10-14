import React from 'react';
import CardImage from '../ui/CardImage/CardImage';
import './Portfolio.css';

function Portfolio() {
	return (
		<>
			<section className='portfolio'>
				<div className='portfolio__content container'>
					<h2 className='portfolio__title'>Выполненные работы</h2>
					<CardImage />
				</div>
			</section>
		</>
	);
}
export default Portfolio; //export the component so it can be used elsewhere in the app
