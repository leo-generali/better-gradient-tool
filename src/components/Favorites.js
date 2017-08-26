import React, { Component } from 'react';

class Favorites extends Component {
	render() {
		return (
			<div className="card favorites" onClick={this.props.showFavorites}>
				<p className="favorites-text">Favorites</p>
			</div>
		)
	};
}

export default Favorites;