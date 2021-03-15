import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tags from './Tags';
import Posts from './Posts';
import { fetchHotPosts, setCurrentForum } from '../../store/actionCreators';

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchHotPosts();
		this.props.setCurrentForum('home');
	}

	render() {
		return (
			<Fragment>
				<div className="mainHeader">
					<Tags tags={['熱門', '最新', '追蹤']} />
				</div>
				<div className="content">
					<img
						className="banner"
						src="https://megapx-assets.dcard.tw/images/95f12d4a-a244-4161-b68c-1fa9b07ce017/full.webp"
						alt=""
					/>
				</div>
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

export default connect(mapState, { fetchHotPosts, setCurrentForum })(Home);
