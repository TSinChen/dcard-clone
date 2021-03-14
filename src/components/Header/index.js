import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'
import SearchBar from './SearchBar'

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-container">
					<Link to="/" className="logo">
						<img
							src={logo}
							alt="Dcard"
						/>
					</Link>
					<SearchBar />
				</div>
			</div>
		);
	}
}

export default Header;