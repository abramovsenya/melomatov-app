import React from 'react';
import './styles/App.css';

//
import { Client } from 'appwrite';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
	const client = new Client();

	client
		.setEndpoint('https://cloud.appwrite.io/v1')
		.setProject('6706b1430026a9682fda');

	return (
		<>
			<Header />
			<Hero />
		</>
	);
}

export default App;
