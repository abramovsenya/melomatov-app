import React from 'react';
import { ButtonLink } from '../ui/Button';
import './Header.css';
import logo from '/src/images/icons/logo.svg';

function Header() {
	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<a href='/' className='nav__logo'>
						<img src={logo} alt='logo' />
					</a>
					<ul className='nav__list'>
						<li className='nav__item'>
							<a href='#' className='nav__link'>
								<span className='nav__status nav__status--circle'></span>
								<span className='nav__status nav__status--text'>
									Запись открыта
								</span>
							</a>
						</li>
						<li className='nav__item'>
							<ButtonLink
								href='#footer'
								onClick={e => {
									e.preventDefault();
									document.getElementById('footer').scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									});
								}}
								className='nav__button'
							>
								Контакты
							</ButtonLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
