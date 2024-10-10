import React from 'react';
import './Slider.css'; // Подключите ваши стили

const slides = [
	'/src/images/workImg.png',
	'/src/images/fish.png',
	'/src/images/corvus.png',
	'/src/images/mask.png',
	'/src/images/workImg.png',
];

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
