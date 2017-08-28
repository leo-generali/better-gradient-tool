import React, { Component } from 'react';

class Popup extends Component {

	getEmoji () {
		const emojis = ["👍", "❤", "😍", "😊", "🔥", "⚡", "👌", "😂"]
		const num = Math.floor((Math.random() * emojis.length));
		const emoji = emojis[num];
		return emoji;
	}

	render() {
		// If the showing property of the popup is not on, it will not be displayed
		if(!this.props.showing) {
			return null;
		}

		const name = this.props.name;
		const emoji = this.getEmoji();

		return (
			<div className="popup">{`Successfully copied ${name}! ${emoji}`}</div>
		);
	}
}

export default Popup;