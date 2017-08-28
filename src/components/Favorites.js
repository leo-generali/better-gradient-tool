import React, { Component } from 'react';

class Favorites extends Component {
	render() {
		return (
			<div className="card tag favorites" onClick={this.props.showFavorites}>
				<p className="favorites__text">Favorites</p>
			</div>
		)
	};
}

export default Favorites;