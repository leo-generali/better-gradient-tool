import React, { Component } from 'react';

class Popup extends Component {
	render() {
		// If the showing property of the popup is not on, it will not be displayed
		if(!this.props.showing) {
			return null;
		}

		const name = this.props.name;

		return (
			<div className="popup">{`Successfully copied ${name}!`}</div>
		);
	}
}

export default Popup;