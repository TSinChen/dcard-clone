import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tags from './Utility/Tags';
import Ads from './Utility/Ads';
import Posts from './Utility/Posts';
import { fetchHotPosts, setCurrentForum } from '../../store/actionCreators';

class HomePage extends React.Component {
	componentDidMount() {
		this.props.fetchHotPosts();
		this.props.setCurrentForum('');
	}

	render() {
		return (
			<Fragment>
				<div className="mainHeader">
					<Tags tags={['熱門', '最新', '追蹤']} />
				</div>
				<Ads />
				<Posts posts={this.props.posts} />
			</Fragment>
		);
	}
}

const mapState = (state) => {
	return {
		posts: state.hotPosts,
	};
};

export default connect(mapState, { fetchHotPosts, setCurrentForum })(HomePage);
