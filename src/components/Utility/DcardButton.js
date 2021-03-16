import React from 'react';

class DcardButton extends React.Component {
	render() {
		return <button className="dcard-button">{this.props.children}</button>;
	}
}

export default DcardButton;
