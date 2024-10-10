import React from 'react';
import { Button } from '../ui/Button';
import CardImage from '../ui/CardImage/CardImage';
import './Portfolio.css';

function Portfolio() {
	return (
		<>
			<section className='portfolio'>
				<div className='portfolio__content container'>
					<h2 className='portfolio__title'>Выполненные работы</h2>
					<CardImage />
					<Button className='button portfolio__button'>Загрузить ещё</Button>
				</div>
			</section>
		</>
	);
}
export default Portfolio; //export the component so it can be used elsewhere in the app
