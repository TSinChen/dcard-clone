import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import '../css/all.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Main/Home';
import Forum from './Main/Forum';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Header />
				<div className="body-container">
					<Navbar />
					<div className="main">
						<Route path="/" exact component={Home} />
						<Route path="/:forum" exact component={Forum} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
