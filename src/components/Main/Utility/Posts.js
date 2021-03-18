import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

class Posts extends React.Component {
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<Link key={post.id} to={`/${post.forumAlias}/p/${post.id}`}>
					<div className="post">
						<div className="post-top">
							<Avatar
								department={post.department}
								gender={post.gender}
							/>
							<div className="txt">
								<div className="post-forum">
									{post.forumName}
								</div>
								．
								<div className="post-school">{post.school}</div>
							</div>
						</div>
						{/* top: 性別（頭像）、看板、學校（ID） */}
						<div className="post-mid">
							<div
								className={`post-txt${
									post.mediaMeta[0] ? '' : ' noThumbnail'
								}`}
							>
								<div className="post-title">{post.title}</div>
								<div className="post-excerpt">
									{post.excerpt}
								</div>
							</div>
							{post.mediaMeta[0] ? (
								<img
									className="post-thumbnail"
									src={
										post.mediaMeta[0]
											? post.mediaMeta[0].thumbnail
											: ''
									}
									alt=""
								/>
							) : (
								''
							)}
						</div>
						{/* mid: 標題、描述、縮圖*/}
						<div className="post-bot">
							<div className="post-emoji">
								<div className="emoji-1"></div>
								<div className="emoji-2"></div>
								<div className="emoji-3"></div>
							</div>
							<div className="post-likeCount">
								{post.likeCount}
							</div>
							<div className="post-comment-icon">
								<svg
									viewBox="0 0 24 24"
									focusable="false"
									role="img"
									aria-hidden="true"
								>
									<path
										d="M1.3330000000000002 12a10.667 10.667 0 1021.334 0 10.667 10.667 0 10-21.334 0zM15.5 6.5h-7A3.5 3.5 0 005 10v3.5A3.5 3.5 0 008.5 17H9v1.369a.75.75 0 001.238.57L12.5 17h3a3.5 3.5 0 003.5-3.5V10a3.5 3.5 0 00-3.5-3.5z"
										fillRule="evenodd"
									></path>
								</svg>
							</div>
							<div className="post-commentCount">
								{post.commentCount}
							</div>
							<div className="post-collect-icon">
								<i className="fas fa-bookmark"></i>
							</div>
							收藏
						</div>
						{/* bot: 心情icons、心情數、留言數、收藏 */}
					</div>
				</Link>
			);
		});
	}

	render() {
		return <div className="posts-preview">{this.renderPosts()}</div>;
	}
}

export default Posts;
