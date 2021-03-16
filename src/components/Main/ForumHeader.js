import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowButton from '../Main/Utility/FollowButton';

class ForumHeader extends React.Component {
	render() {
		const { currentForum } = this.props;

		return (
			<div className="forumHeader">
				<div className="forum-logo">
					<img
						src={currentForum.logo ? currentForum.logo.url : ''}
						alt=""
					/>
				</div>
				<Link className="forum-name" to={`/${currentForum.alias}`}>
					{currentForum.name}
				</Link>
				<FollowButton />
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
