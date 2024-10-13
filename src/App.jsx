import React from 'react';
import './styles/App.css';

//
import { Client } from 'appwrite';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
	const client = new Client();

	client
		.setEndpoint('https://cloud.appwrite.io/v1')
		.setProject('6706b1430026a9682fda');

	return (
		<>
			<Header />
			<Hero />
			<About />
			<Portfolio />
			<Faq />
			<Footer />
		</>
	);
}

export default App;
