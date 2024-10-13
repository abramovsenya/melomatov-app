import React from 'react';
import './Footer.css';
import linkImage from '/src/images/icons/link.svg';

function Footer() {
	return (
		<footer id='footer' className='footer'>
			<div className='footer__content container'>
				<h2 className='footer__title'>Контакты</h2>
				<p className='footer__subtitle'>
					Если ты готов, то давай воплатим твою задумку в реальность
				</p>
				<div className='footer__aside'>
					<p className='footer__address'>
						Чистопрудный бул., 15, стр. 2, Москва метро: Чистые пруды,
						Тургеневская, Сретенский бульвар
					</p>
					<div className='footer__divider'></div>
					<ul className='footer__menu'>
						<li className='footer__link'>
							<a
								className='footer__link-item'
								href='https://www.instagram.com/melomatov.tattoo?igsh=MTNweGVwZXdiNGdvaQ=='
								target='_blank'
								rel='noopener noreferrer'
							>
								Instagram
								<img alt='icon' src={linkImage} />
							</a>
						</li>
						<li className='footer__link'>
							<a
								className='footer__link-item'
								href='https://vk.com/melomatov.tattoo'
								target='_blank'
								rel='noopener noreferrer'
							>
								Вконтакте
								<img alt='icon' src={linkImage} />
							</a>
						</li>
						<li className='footer__link'>
							<a
								className='footer__link-item'
								href='https://t.me/melomatov'
								target='_blank'
								rel='noopener noreferrer'
							>
								Telegram
								<img alt='icon' src={linkImage} />
							</a>
						</li>
						<li className='footer__link'>
							<a
								className='footer__link-item'
								href='https://wa.me/79772748474'
								target='_blank'
								rel='noopener noreferrer'
							>
								WhatsApp
								<img alt='icon' src={linkImage} />
							</a>
						</li>
						<li className='footer__link'>
							<a className='footer__link-item' href='tel:+89772748474'>
								8(977)-274-84-74
								<img alt='icon' src={linkImage} />
							</a>
						</li>
					</ul>
				</div>
				<p className='footer__copyright'>Copyright © 2024 Abramov Arseniy</p>
			</div>
		</footer>
	);
}

export default Footer;
