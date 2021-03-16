import React from 'react';
import { connect } from 'react-redux';
import DcardButton from '../Utility/DcardButton';

class ForumPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	countLast30Days(postCount) {
		if (postCount < 20) {
			return `每月有 ${postCount} 篇貼文`;
		} else if (postCount >= 20 && postCount < 130) {
			return `每週有 ${Math.round(postCount / 4)} 篇貼文`;
		} else {
			return `每天有 ${Math.round(postCount / 30)} 篇貼文`;
		}
	}

	render() {
		const { currentForum } = this.props;

		return (
			<div className="forum-post">
				<div className="forum-header">
					<div className="forum-logo">
						<img
							src={currentForum.logo ? currentForum.logo.url : ''}
							alt=""
						/>
					</div>
					<div className="forum-name">
						<h2>{currentForum.name}</h2>
					</div>
				</div>
				<div className="forum-postsPerDay">
					{currentForum.postCount
						? this.countLast30Days(
								currentForum.postCount.last30Days
						  )
						: ''}
				</div>
				<div
					className={`forum-description${
						this.state.open ? ' open' : ' close'
					}`}
					onClick={() => {
						this.setState({
							open: !this.state.open,
						});
					}}
				>
					<p>{currentForum.description}</p>
					<div className="toggle">
						<svg
							viewBox="0 0 24 24"
							focusable="false"
							role="img"
							aria-hidden="true"
						>
							<path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path>
							<path fill="none" d="M0 0h24v24H0z"></path>
						</svg>
					</div>
				</div>
				<DcardButton>發表文章</DcardButton>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentForum: state.currentForum,
	};
};

export default connect(mapState, null)(ForumPost);
