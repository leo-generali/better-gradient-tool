import React, { Component } from 'react';

class GradientCard extends Component {
	render() {

		const style = {
			background: this.props.styleInfo
		};

		const name = this.props.name;

		return(
			<div style={style} className="card">
				{name}
			</div>
		);
	}
}

export default GradientCard;