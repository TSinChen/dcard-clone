import React from 'react';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
import { connect } from 'react-redux';
import { fetchCurrentPost } from '../../../store/actionCreators';

class Post extends React.Component {
	componentDidMount() {
		this.props.fetchCurrentPost();
	}

	render() {
		console.log(this.props);
		return (
			<div className="post">
				{this.props.forum}
				{this.props.id}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentPost: state.currentPost,
	};
};

export default connect(mapState, { fetchCurrentPost })(Post);
