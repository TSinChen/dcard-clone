import React from 'react';
import { connect } from 'react-redux';

class Tags extends React.Component {
	render() {
		return (
			<div className="tags">
				{this.props.tags.map((tag) => {
					return (
						<a
							className={`tags-item${
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

export default connect(mapState, null)(Tags);
