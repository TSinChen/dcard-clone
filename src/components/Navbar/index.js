import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {
	fetchHotForums,
	fetchFeaturedForums,
} from '../../store/actionCreators';

class Navbar extends React.Component {
	componentDidMount() {
		this.props.fetchHotForums();
		this.props.fetchFeaturedForums();
	}

	renderNormal() {
		return (
			<div className="nav-block">
				<Link className="nav-item" to="/forum/all">
					<div className="forum-logo">
						<i className="fas fa-list-alt"></i>
					</div>
					<p className="forum-name">所有看板</p>
				</Link>
				<Link className="nav-item" to="/forum/popular">
					<div className="forum-logo">
						<i className="fas fa-fire"></i>
					</div>
					<p className="forum-name">即時熱門看板</p>
				</Link>
				<Link className="nav-item" to="">
					<div className="forum-logo">
						<i className="fas fa-store"></i>
					</div>
					<p className="forum-name">好物研究室</p>
				</Link>
				<Link className="nav-item" to="">
					<div className="forum-logo">
						<i className="fas fa-gamepad"></i>
					</div>
					<p className="forum-name">遊戲專區</p>
				</Link>
			</div>
		);
	}

	renderHotForums() {
		return (
			<div className="nav-block">
				<p>即時熱門看板</p>
				{this.props.hotForums.map((forum, index) => {
					return (
						index < 8 && (
							<Link
								className={`nav-item${
									forum.alias ===
									this.props.currentForum.alias
										? ' active'
										: ''
								}`}
								key={forum.id}
								to={`/${forum.alias}`}
							>
								<img
									className="forum-logo"
									src={forum.logo.url}
									alt="Logo"
								/>
								<p className="forum-name">{forum.name}</p>
							</Link>
						)
					);
				})}
				<Link className="nav-item" to="/forum/popular">
					<p className="forum-name more">更多</p>
				</Link>
			</div>
		);
	}

	renderFeaturedForums() {
		return (
			<div className="nav-block">
				<p>Dcard 精選看板</p>
				{this.props.featuredForums.map((forum) => {
					return (
						<Link
							className={`nav-item${
								forum.alias === this.props.currentForum.alias
									? ' active'
									: ''
							}`}
							key={forum.id}
							to={`/${forum.alias}`}
						>
							<img
								className="forum-logo"
								src={forum.logo.url}
								alt="Logo"
							/>
							<p className="forum-name">{forum.name}</p>
						</Link>
					);
				})}
			</div>
		);
	}

	render() {
		return (
			<div className="navbar">
				{this.renderNormal()}
				<SimpleBar
					className="scroll"
					timeout="700"
					scrollbarMaxSize="450"
				>
					{this.renderHotForums()}
					{this.renderFeaturedForums()}
				</SimpleBar>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		hotForums: state.hotForums,
		featuredForums: state.featuredForums,
		currentForum: state.currentForum,
	};
};

export default connect(mapState, { fetchHotForums, fetchFeaturedForums })(
	Navbar
);
