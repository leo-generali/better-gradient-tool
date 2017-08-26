import React from 'react';

const FavedStar = (status) => {
	console.log(status);
	return <p className={status.status ? "favorites-star favorites-star--faved" : "favorites-star"}>★</p>;
}

export default FavedStar;