import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ForumHeader extends React.Component {
	render() {
		const { currentForum } = this.props;

		return (
			<div className="forumHeader">
				<div className="left">
					<div className="forum-logo">
						<img
							src={currentForum.logo ? currentForum.logo.url : ''}
							alt=""
						/>
					</div>
					<Link className="forum-name" to={`/${currentForum.alias}`}>
						{currentForum.name}
					</Link>
				</div>
				<button className="forum-follow">追蹤</button>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentForum: state.currentForum,
	};
};

export default connect(mapState, null)(ForumHeader);
