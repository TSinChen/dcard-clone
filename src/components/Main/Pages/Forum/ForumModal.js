import React from 'react';
import Modal from '../../../Modal';
import { connect } from 'react-redux';
import { modalOpen } from '../../../../store/actionCreators';
import Post from '../Post';

class ForumModal extends React.Component {
	componentDidMount() {
		this.props.modalOpen();
	}

	render() {
		const { forum, id } = this.props.match.params;

		return (
			<Modal>
				<div className="modal-background"></div>
				<div className="modal-content">
					<Post forum={forum} id={id} />
				</div>
			</Modal>
		);
	}
}

export default connect(null, { modalOpen })(ForumModal);
