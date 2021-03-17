import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="modal">{props.children}</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
