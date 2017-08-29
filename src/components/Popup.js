import React, { Component } from 'react';

class Popup extends Component {

	render() {
		// If the showing property of the popup is not on, it will not be displayed
		if(!this.props.showing) {
			return null;
		}

		const notification = this.props.notification;

		return (
			<div className="popup">{notification}</div>
		);
	}
}

export default Popup;