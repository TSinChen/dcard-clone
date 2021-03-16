import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DcardButton from '../../Utility/DcardButton';

class CurrentHotForums extends React.Component {
	renderHotForums() {
		return this.props.hotForums.map((forum, index) => {
			return (
				<div className="hotForums-list" key={forum.id}>
					<ul>
						<li className="hotForums-item">
							<Link to={`/${forum.alias}`}>
								<div
									className={`hotForum-index${
										index < 3 ? ' top3' : ''
									}`}
								>
									{index + 1}
								</div>
								<img
									className="hotForum-logo"
									src={forum.logo.url}
									alt=""
								/>
								<div className="hotForum-name">
									{forum.name}
								</div>
								<DcardButton>追蹤</DcardButton>
							</Link>
						</li>
					</ul>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="currentHotForums">
				<h2>即時熱門看板</h2>
				{this.renderHotForums()}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		hotForums: state.hotForums,
	};
};

export default connect(mapState, null)(CurrentHotForums);
