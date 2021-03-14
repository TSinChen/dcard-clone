import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="search-bar">
					<input placeholder="搜尋" />
					<button>
						<i className="fas fa-search"></i>
					</button>
			</div>
		);
	}
}

export default SearchBar;
