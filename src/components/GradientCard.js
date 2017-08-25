import React, { Component } from 'react';

class GradientCard extends Component {
	copyCSS(css) {
		//This is a SUPER hacky way of copy the gradient over. Will need to look
		//into better ways. 
		//
		//
		//Currently, this creates a text area that is a child of the body. It selects
		//the newly created text, creates a text area under the body, copies it, and
		//then removes the text area... Sneaky!

		const tempTextArea = document.createElement('textarea');
		tempTextArea.value = css.background;
		document.body.appendChild(tempTextArea);
		console.log(css.background);
		tempTextArea.select();
		document.execCommand("copy");
		document.body.removeChild(tempTextArea);
	}

	render() {

		const style = {
			background: this.props.styleInfo
		};

		const name = this.props.name;

		return(
			<div style={style} className="card card__gradient" onClick={() => this.copyCSS(style)} >
				{name}
			</div>
		);
	}
}

export default GradientCard;