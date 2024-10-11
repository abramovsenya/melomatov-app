import React from 'react';
import './Slider.css'; // Подключите ваши стили

import corvus from '/src/images/corvus.png';
import fish from '/src/images/fish.png';
import mask from '/src/images/mask.png';
import workImg from '/src/images/workImg.png';

const slides = [workImg, fish, corvus, mask, workImg];

const Slider = () => {
	return (
		<div className='slider'>
			<div className='slider-wrapper'>
				<div className='slider-track'>
					{/* Дублируем слайды дважды для бесконечного эффекта */}
					{slides.map((slide, index) => (
						<div key={index} className='slider-slide'>
							<img src={slide} alt={`Slide ${index + 1}`} />
						</div>
					))}
					{slides.map((slide, index) => (
						<div key={index + slides.length} className='slider-slide'>
							<img src={slide} alt={`Slide ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
