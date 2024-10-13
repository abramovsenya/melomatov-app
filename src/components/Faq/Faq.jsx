import React from 'react';
import Accordion from '../ui/Accordion/Accordion';
import './Faq.css';
function Faq() {
	return (
		<>
			<section className='faq'>
				<div className='faq__content container'>
					<h2 className='faq__title'>Faq</h2>
					<div className='faq__info'>
						<p className='faq__text'>
							Как татуировщик, я часто получаю запросы от клиентов относительно
							их татуировок, цен или процесса записи на прием. Чтобы помочь
							ответить на эти распространенные вопросы, я составил список часто
							задаваемых вопросов.<br></br> Если у вас есть какие-либо
							дополнительные вопросы, пожалуйста, не стесняйтесь обращаться ко
							мне.
						</p>
						<Accordion />
					</div>
				</div>
			</section>
		</>
	);
}

export default Faq;
