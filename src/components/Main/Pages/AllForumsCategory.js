import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DcardButton from '../../Utility/DcardButton';
import { fetchCategories, fetchForums } from '../../../store/actionCreators';

class AllForumsCategory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openCategory: '',
			categoryForums: [],
		};
	}

	componentDidMount() {
		this.props.fetchCategories();
		this.props.fetchForums();
	}

	onCategoryClick(id) {
		this.setState({
			openCategory: id,
			categoryForums: [],
		});

		this.fetchCategoryForums(id);
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
										? ' open'
										: ' close'
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
									<div className="toggle">
										<svg
											viewBox="0 0 24 24"
											focusable="false"
											role="img"
											aria-hidden="true"
										>
											<path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path>
											<path
												fill="none"
												d="M0 0h24v24H0z"
											></path>
										</svg>
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
			<div className="category-forums-list">
				<ul>
					{this.state.categoryForums.map((categoryForum) => {
						return (
							<li
								className="category-forums-item"
								key={categoryForum.id}
							>
								<Link to={`/${categoryForum.alias}`}>
									<div className="forum-logo">
										<img
											src={categoryForum.logo.url}
											alt=""
										/>
									</div>
									<div className="forum-name">
										{categoryForum.name}
									</div>
									<DcardButton>追蹤</DcardButton>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
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
