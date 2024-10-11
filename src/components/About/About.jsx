import React from 'react';
import './About.css';
import aboutImg from '/src/images/aboutImg.png';

function About() {
	return (
		<>
			<section className='about'>
				<div className='about__content container'>
					<h2 className='about__title'>За пределами татуировки</h2>
					<div className='about__info'>
						<div className='about__info-description'>
							<h2 className='about__info-title'>Обо мне</h2>
							<p className='about__subtitle'>
								Привет! Меня зовут Вячеслав, и я тату-мастер с опытом более трёх
								лет в индустрии.<br></br> Работаю в студии <u>Мечта тату</u>.
							</p>
							<p className='about__text'>
								Моя цель — создавать уникальные и значимые татуировки, которые
								отражают личность каждого клиента. Предпочитаю работать в таких
								направлениях как реализм и графика.
							</p>
							<p className='about__text about__text_aside'>
								Мой подход к работе индивидуален: я всегда уделяю внимание
								каждому клиенту, раскрывая его идеи и превращая их в искусство,
								которое выведет вашу индивидуальность на новый уровень. Я ценю
								безопасность и гигиену, поэтому использую только
								высококачественные и безопасные материалы.
							</p>
						</div>
						<img className='about__image' src={aboutImg} alt='Обо мне' />
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
