import React from 'react';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../Utility/Avatar';
import DcardButton from '../../Utility/DcardButton';
import {
	fetchCurrentPost,
	fetchCurrentForum,
} from '../../../store/actionCreators';

class Post extends React.Component {
	componentDidMount() {
		this.props.fetchCurrentPost();
		this.props.fetchCurrentForum(this.props.forum);
	}

	renderAuthor(post) {
		if (post.withNickname) {
			return (
				<Link className="post-author" to={`/@${post.department}`}>
					<Avatar department={post.department} gender={post.gender} />
					<div className="author-information">
						<div className="post-school">{post.school}</div>
						<div className="post-department">{`@${post.department}`}</div>
					</div>
				</Link>
			);
		} else {
			return (
				<div className="post-author">
					<Avatar department={post.department} gender={post.gender} />
					<div className="author-information">
						<div className="post-school">{post.school}</div>
					</div>
				</div>
			);
		}
	}

	renderCreatedAt(time) {
		if (time) {
			return (
				<p>
					{time[6] +
						'月' +
						(time[8] === '0' ? '' : time[8]) +
						time[9] +
						'日 ' +
						(parseFloat(time[11] + time[12]) + 8) +
						':' +
						time[14] +
						time[15]}
				</p>
			);
		}
	}

	renderTopics(topics) {
		return topics.map((topic) => {
			return (
				<li className="topics-item" key={topic}>
					<Link to={`/topics/${topic}`}>{topic}</Link>
				</li>
			);
		});
	}

	renderReactions(reactions) {
		switch (reactions.length) {
			case 3:
				return [
					<div className="emoji emoji-1"></div>,
					<div className="emoji emoji-2"></div>,
					<div className="emoji emoji-3"></div>,
				];
			case 2:
				return [
					<div className="emoji emoji-1"></div>,
					<div className="emoji emoji-2"></div>,
				];
			case 1:
				return <div className="emoji emoji-1"></div>;
			default:
				return;
		}
	}

	render() {
		const { currentPost } = this.props;
		return (
			<div className="post">
				<div className="post-header">
					{this.renderAuthor(currentPost)}
					<DcardButton>追蹤</DcardButton>
					<button
						className="close"
						onClick={() => window.history.back(-1)}
					>
						<svg
							viewBox="0 0 24 24"
							focusable="false"
							role="img"
							aria-hidden="true"
						>
							<path d="M13.2 12l5.6-5.6a.4.4 0 000-.6l-.6-.6a.4.4 0 00-.6 0L12 10.8 6.4 5.2a.4.4 0 00-.6 0l-.6.6a.4.4 0 000 .6l5.6 5.6-5.6 5.6a.4.4 0 000 .6l.6.6a.4.4 0 00.6 0l5.6-5.6 5.6 5.6a.4.4 0 00.6 0l.6-.6a.4.4 0 000-.6z"></path>
						</svg>
					</button>
				</div>
				<div className="post-article">
					<h1 className="post-title">{currentPost.title}</h1>
					<div className="post-forumName">
						<Link to={`/${currentPost.forumAlias}`}>
							{currentPost.forumName}
						</Link>
						{this.renderCreatedAt(currentPost.createdAt)}
					</div>
					<div className="post-body">內文</div>
					<ul className="post-topics">
						{currentPost.topics
							? this.renderTopics(currentPost.topics)
							: ''}
					</ul>
				</div>
				<div className="post-footer">
					<div className="post-reactions">
						{currentPost.reactions
							? this.renderReactions(
									currentPost.reactions,
									currentPost.likeCount
							  )
							: ''}

						<p className="reaction-count">
							{currentPost.likeCount}
						</p>
					</div>
					<div className="post-reply">
						回應 {currentPost.commentCount}
					</div>
					<div className="post-actions">
						<div className="action-item">
							<i className="fas fa-heart"></i>
						</div>
						<div className="action-item">
							<i className="fas fa-bookmark"></i>
						</div>
						<div className="action-item">
							<i className="fas fa-bell"></i>
						</div>
					</div>
				</div>
				<div className="post-information">
					<div className="information-header">文章資訊</div>
					<div className="information-block">
						<div className="information-item">
							{currentPost.withNickname ? (
								<div className="author">
									<Avatar
										department={currentPost.department}
										gender={currentPost.gender}
									/>
								</div>
							) : (
								''
							)}
						</div>
						<div className="information-item">
							<img
								src={
									currentPost.logo ? currentPost.logo.url : ''
								}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentPost: state.currentPost,
	};
};

export default connect(mapState, { fetchCurrentPost, fetchCurrentForum })(Post);
