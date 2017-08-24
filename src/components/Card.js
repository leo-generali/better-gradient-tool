import React, { Component } from 'react';

class Card extends Component {
	render() {

		const style = {
			background: this.props.styleInfo
		};

		return(
			<div style={style} className="card"></div>
		);
	}
}

export default Card;