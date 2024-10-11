import React, { useEffect, useState } from 'react';
import '../../Portfolio/Portfolio.css';
import { Button } from '../Button';
import './CardImage.css';
const CardImage = () => {
	const [images, setImages] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		const imageKeys = [
			'67081ef2001e517c6cce',
			'67081f0b002afd85a8d1',
			'67081f14001f9ba93734',
			'67083624000ef98c3175',
			'6708362a0027870990a0',
			'6708363b001c4c5b7831',
			'6708364000260535668e',
			'6708364d0038c9efad14',
			'670836540010358ee86e',
			'670836590016184fcf6a',
			'6708365e0013e7f7774c',
			'67083663001cde97a2df',
		];

		const bucketId = '67081d8200025a84d88f';
		const projectId = '6706b1430026a9682fda';

		const imageUrls = imageKeys.map(
			key =>
				`https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${key}/view?project=${projectId}&mode=admin`
		);

		setImages(imageUrls);
	}, []);

	const tattooStyles = [
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
		'Графика',
	];

	const openImage = imageUrl => {
		setSelectedImage(imageUrl);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<div>
			<div className='portfolio__cards'>
				{images.map((imageUrl, index) => (
					<article key={index} className='card-image'>
						<img
							src={imageUrl}
							alt={`Tattoo Style ${index + 1}`}
							className='card-image__image'
							onClick={() => openImage(imageUrl)}
						/>
						<div className='card-image__info'>
							<p>{tattooStyles[index]}</p>
						</div>
					</article>
				))}
			</div>
			<Button className='portfolio__button'>Загрузить ещё</Button>
			{/* Модальное окно */}
			{selectedImage && (
				<div className='modal' onClick={closeModal}>
					<span className='modal__close'>&times;</span>
					<img className='modal__content' src={selectedImage} alt='Selected' />
				</div>
			)}
		</div>
	);
};

export default CardImage;
