import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import '../css/all.css';
import Header from './Header';
import Navbar from './Navbar';
import HomePage from './Main/Pages/HomePage';
import Forum from './Main/Pages/Forum/Forum';
import AllForumsCategory from './Main/Pages/AllForumsCategory';
import CurrentHotForums from './Main/Pages/CurrentHotForums';
import Side from './Side';
import ForumModal from './Main/Pages/Forum/ForumModal';

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
						<Route
							path="/forum/all"
							exact
							component={AllForumsCategory}
						/>
						<Route
							path="/forum/popular"
							exact
							component={CurrentHotForums}
						/>
						<Route
							path="/:forum/p/:id"
							exact
							component={ForumModal}
						/>
					</div>
					<Side />
				</div>
			</HashRouter>
		);
	}
}

export default App;
