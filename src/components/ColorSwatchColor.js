import React, { Component } from 'react';

import { createCopyNotification } from '../helpers/notifications';

class ColorSwatchColor extends Component {
	copyCSS(css, name) {
		console.log(css);
		//This is a SUPER hacky way of copy the gradient over. Will need to look
		//into better ways. 
		//
		//
		//Currently, this creates a text area that is a child of the body. It selects
		//the newly created text, creates a text area under the body, copies it, and
		//then removes the text area... Sneaky!

		this.props.addNotification(createCopyNotification(name));
		const tempTextArea = document.createElement('textarea');
		tempTextArea.value = css;
		document.body.appendChild(tempTextArea);
		tempTextArea.select();
		document.execCommand("copy");
		document.body.removeChild(tempTextArea);
	}

	render() {

		const hex = this.props.color;
		const styleBG = { backgroundColor: hex };
		const styleCol = { color: hex };
		
		return(
			<div 
				className="color-swatch-row"
				onClick={ () => this.copyCSS(hex, "this color") }>
				<div 
					className="color-swatch-color" 
					style={styleBG}
				/>
				<p className="color-swatch-color-hex"
					style={styleCol}>
					{hex}
				</p>
			</div>
		);
	}
}

export default ColorSwatchColor;