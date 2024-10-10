import React from 'react';
import Slider from '../ui/Slider/Slider';
// import Swiper from "swiper";
import './Hero.css';

function Hero() {
	return (
		<section className='hero'>
			<div className='hero__content container'>
				<h3 className='hero__subtitle'>Привет, Я</h3>
				<h2 className='hero__name'>Вячеслав Меломатов</h2>
				<div className='hero__info'>
					<h1 className='hero__title'>Тату мастер</h1>
					<h3 className='hero__location'>Работаю в Москве</h3>
				</div>
			</div>
			<Slider />
		</section>
	);
}

export default Hero;
