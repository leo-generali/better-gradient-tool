import React, { Component } from 'react';

class FavedStar extends Component {

	render() {
		return (
			<div 
				onClick={() => this.props.addToFavorites(this.props.index)}
				className="favorites-star-bg">
				<p className={this.props.status ? "favorites-star favorites-star--faved" : "favorites-star"}>★</p>
			</div>
		); 
	}
}

export default FavedStar;