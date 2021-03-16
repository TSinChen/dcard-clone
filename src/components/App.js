import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import '../css/all.css';
import Header from './Header';
import Navbar from './Navbar';
import HomePage from './Main/HomePage';
import Forum from './Main/Forum';
import AllForumsCategory from './Main/AllForumsCategory';
import CurrentHotForums from './Main/CurrentHotForums';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Header />
				<div className="body-container">
					<Navbar />
					<div className="main">
						<Route path="/" exact component={HomePage} />
						<Route path="/:forum" exact component={Forum} />
						<Route path="/forum/all" exact component={AllForumsCategory} />
						<Route path="/forum/popular" exact component={CurrentHotForums} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
