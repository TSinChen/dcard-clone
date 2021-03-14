import React from 'react';
import { connect } from 'react-redux';

class HomeNavbar extends React.Component {
	render() {
		return (
			<div className="homeNavbar">
				{this.props.tags.map((tag) => {
					return (
						<a
							className={`nav-item${
								this.props.currentTag === tag ? ' active' : ''
							}`}
							key={tag}
							href="/"
						>
							{tag}
						</a>
					);
				})}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentTag: state.currentTag.home,
	};
};

export default connect(mapState, null)(HomeNavbar);
