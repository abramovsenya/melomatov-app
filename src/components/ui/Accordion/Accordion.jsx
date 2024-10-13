import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = index => {
		if (activeIndex === index) {
			setActiveIndex(null); // Скрыть секцию, если она уже открыта
		} else {
			setActiveIndex(index); // Показать секцию
		}
	};

	const accordionData = [
		{
			title: 'Как записаться на сеанс или бесплатную консультацию?',
			content:
				'Процесс записи очень прост Просто свяжитесь со мной любым удобным способом, и мы с Вами выберем удобный день и удобное время чтобы встретиться на бесплатной консультации или сеансе',
		},
		{
			title: 'Сколько стоит разработка индивидуального эскиза?',
			content:
				'Разработка эскиза конечно входит в стоимость сеанса и доплачивать за это не нужно ',
		},
		{
			title: 'Сколько стоит татуировка?',
			content:
				'Стоимость сеанса татуировки сугубо индивидуальна, и точную стоимость можно определить после бесплатной онлайн или оффлайн консультации',
		},
		{
			title: 'Как подготовится к сеансу?',
			content:
				'Подготовится к сеансу очень просто. Как известно, нашему организму требуется много энергии на выполнение своих задач. Так и с татуировкой, чтобы максимально комфортно перенести сеанс, следует: 1. Хорошо выспаться 2. Плотно и вкусно покушать 3. Если долгий сеанс, взять с собой перекус 4. Освободить день от второстепенных дел и задач 5. Обязательно быть в хорошем настроении ',
		},
		{
			title: 'Как правильно ухаживать за татуировкой после сеанса?',
			content:
				'Статью про правильное заживление и уход за татуировкой Вы сможете найти у меня в группе ВКонтакте',
		},
	];

	return (
		<div className='accordion'>
			{accordionData.map((item, index) => (
				<div key={index} className='accordion-item'>
					<div
						className={`accordion-title ${
							activeIndex === index ? 'active' : ''
						}`}
						onClick={() => toggleAccordion(index)}
					>
						<span>{item.title}</span>
						<span
							className={`accordion-icon ${
								activeIndex === index ? 'open' : ''
							}`}
						>
							{activeIndex === index ? '−' : '+'}
						</span>
					</div>
					<div
						className={`accordion-content ${
							activeIndex === index ? 'open' : ''
						}`}
					>
						<div className='accordion-text'>{item.content}</div>
						<div className='accordion-line'></div> {/* Полоска под контентом */}
					</div>
				</div>
			))}
		</div>
	);
}

export default Accordion;
