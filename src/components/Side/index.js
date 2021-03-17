import React from 'react';
import { connect } from 'react-redux';
import ForumPost from './ForumPost';

class Side extends React.Component {
	render() {
		return (
			<div className="side">
				{this.props.currentForum ? <ForumPost /> : ''}
				<div className="ads-block">廣告</div>
				<div className="ads-block">廣告</div>
				<div className="ads-block">廣告</div>
				<div className="ads-block">廣告</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentForum: state.currentForum,
	};
};

export default connect(mapState)(Side);
