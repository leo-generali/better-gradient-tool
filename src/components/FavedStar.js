import React, { Component } from 'react';

class FavedStar extends Component {

	render() {
		return (
			<p
				onClick={(event) => this.props.addToFavorites(this.props.index, event)} 
				className={this.props.status ? "favorites-star favorites-star--faved" : "favorites-star"}>
				★
			</p>
		); 
	}
}

export default FavedStar;