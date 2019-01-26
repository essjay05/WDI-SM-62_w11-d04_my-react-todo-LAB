import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';


export default class App extends Component {

	render() {
		return (
		<div className="container">
			<Header />
			{ MyRoutes }
		</div>
		);
	}
}