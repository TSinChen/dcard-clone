import React from 'react';

class Posts extends React.Component {
	renderAvatar(department, gender) {
		return department ? (
			<div
				className={`post-avatar${gender === 'M' ? ' male' : ' female'}`}
			>
				{department[0].toUpperCase()}
			</div>
		) : gender === 'M' ? (
			<svg viewBox="0 0 40 40" focusable="false" className="post-avatar">
				<title>男</title>
				<path
					fill="#81D4FA"
					d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
				></path>
				<path
					fill="#2490BF"
					d="M16 7.9C12.4 7.4 9.3 6 9.3 6s5.5 4.3 5 5.3c-.4 1-4.2 0-4.2 0l4 2a9.7 9.7 0 00-1.5 4.6l.1 3.4a1.5 1.5 0 10.8 2.9 8.3 8.3 0 006.2 5.3c.6 0 .6 2 .6 3.2-1.6 1-2.5 3-2 5v2.2a20.2 20.2 0 009.9-1.6l-.7-2.7v-.4l-.2-.4-.2-.4-.2-.3-.2-.3c-.7-1-1.7-1.6-2.9-1.8l.6-2.3s1.4-1 3-2.6l.4 1.3 1.4-2.5.9-1.8s3.8-10.3.8-13.9c-2.6-3-11-1.9-14.7-2.3"
				></path>
			</svg>
		) : (
			<svg className="post-avatar" viewBox="0 0 40 40" focusable="false">
				<title>女</title>
				<path
					fill="#F48FB1"
					d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
				></path>
				<path
					fill="#CB3A6B"
					d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
				></path>
			</svg>
		);
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<div className="post" key={post.id}>
					<div className="post-top">
						{this.renderAvatar(post.department, post.gender)}
						<div className="txt">
							<div className="post-forum">{post.forumName}</div>．
							<div classNames="post-school">{post.school}</div>
						</div>
					</div>
					{/* top: 性別（頭像）、看板、學校（ID） */}
					<div className="post-mid">
						<div className="txt">
							<div className="post-title">{post.title}</div>
							<div className="post-excerpt">{post.excerpt}</div>
						</div>
					</div>
					{/* mid: 標題、描述、縮圖*/}
					<div className="post-bot"></div>
					{/* bot: 心情icons、心情數、留言數、收藏 */}
				</div>
			);
		});
	}

	render() {
		return <div className="posts">{this.renderPosts()}</div>;
	}
}

export default Posts;
