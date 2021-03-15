import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchCategories, fetchForums } from '../../store/actionCreators';

class AllForumsCategory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openCategory: '',
			categoryForums: [],
		};
	}

	onCategoryClick(id) {
		this.setState({
			openCategory: id,
			categoryForums: [],
		});

		this.fetchCategoryForums(id);
	}

	componentDidMount() {
		this.props.fetchCategories();
		this.props.fetchForums();
	}

	fetchCategoryForums = async (id) => {
		const { forums } = this.props;

		if (id === this.state.openCategory) {
			this.setState({
				openCategory: '',
			});
			return;
		}

		const res = await axios.get('/apis/categoryForums.json');

		forums.forEach((forum) => {
			res.data.forumIds.forEach((forumId) => {
				if (forumId === forum.id) {
					this.setState({
						categoryForums: [...this.state.categoryForums, forum],
					});
				}
			});
		});
	};

	renderCategory() {
		return (
			<div className="category-list">
				<ul>
					{this.props.categories.map((category) => {
						return (
							<li
								className={`category-item${
									category.id === this.state.openCategory
										? ' active'
										: ' inactive'
								}`}
								key={category.id}
							>
								<div
									className="category-header"
									onClick={() => {
										this.onCategoryClick(category.id);
									}}
								>
									<div className="category-name">
										{category.name}
									</div>
									<div className="arrow">
										<i className="fas fa-caret-down"></i>
									</div>
								</div>
								{this.renderCategoryForums()}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	renderCategoryForums() {
		return (
			<ul className="category-forums-list">
				{this.state.categoryForums.map((categoryForum) => {
					return (
						<li
							className="category-forums-item"
							key={categoryForum.id}
						>
							<div className="left">
								<div className="forum-logo">
									<img src={categoryForum.logo.url} alt="" />
								</div>
								<div className="forum-name">
									{categoryForum.name}
								</div>
							</div>
							<button className="forum-follow">追蹤</button>
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		return (
			<div className="allForumsCategory">
				<h2>看板分類</h2>
				{this.renderCategory()}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		categories: state.categories,
		forums: state.forums,
	};
};

export default connect(mapState, { fetchCategories, fetchForums })(
	AllForumsCategory
);
