import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tags from '../Utility/Tags';
import Ads from '../Utility/AdBanner';
import Posts from '../Utility/Posts';
import ForumHeader from './ForumHeader';
import {
	fetchCurrentForum,
	fetchForumPosts,
	setCurrentForum,
} from '../../../store/actionCreators';

class Forum extends React.Component {
	componentDidMount() {
		this.props.fetchCurrentForum(this.props.match.params.forum);
		this.props.fetchForumPosts();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.forum !== prevProps.match.params.forum) {
			this.props.fetchCurrentForum(this.props.match.params.forum);
			this.props.fetchForumPosts();
		}
	}

	componentWillUnmount() {
		this.props.setCurrentForum('');
	}

	render() {
		const { currentForum } = this.props;
		return (
			<Fragment>
				<div className="jumbotron">
					<img
						src={
							currentForum.heroImage
								? currentForum.heroImage.url
								: ''
						}
						alt=""
					/>
				</div>
				<div className="mainHeader">
					<ForumHeader />
					<Tags tags={['熱門', '最新', '板規']} />
				</div>
				<Ads />
				<Posts posts={this.props.posts} />
			</Fragment>
		);
	}
}

const mapState = (state) => {
	return {
		posts: state.forumPosts,
		currentForum: state.currentForum,
	};
};

export default connect(mapState, {
	fetchCurrentForum,
	fetchForumPosts,
	setCurrentForum,
})(Forum);
