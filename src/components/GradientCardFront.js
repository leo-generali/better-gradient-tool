import React, { Component } from 'react';

import Popup from './Popup';
import FavedStar from './FavedStar';

import { createCopyNotification } from '../helpers/notifications';
import flipicon from '../img/flip.svg'; 

class GradientCardFront extends Component {
	copyCSS(css, name) {
		//This is a SUPER hacky way of copy the gradient over. Will need to look
		//into better ways. 
		//
		
		//Currently, this creates a text area that is a child of the body. It selects
		//the newly created text, creates a text area under the body, copies it, and
		//then removes the text area... Sneaky!
		const prefixOn = this.props.prefixOn;
		const prefixes = [
			"-webkit-linear-gradient", "-o-linear-gradient"
		]
		const colors = css.slice(15);
		const unprefixed = `background-image: linear-gradient${colors};`;

		let text = prefixOn ? addPrefixes() : unprefixed;

		if(this.props.fallbackOn) {
			text = `background-color: ${this.props.colors[0]};\n${text}\n`;
		}

		console.log(this.props.colors[0]);

		this.props.addNotification(createCopyNotification(name));
		const tempTextArea = document.createElement('textarea');
		tempTextArea.value = text;
		document.body.appendChild(tempTextArea);
		tempTextArea.select();
		document.execCommand("copy");
		document.body.removeChild(tempTextArea);

		function addPrefixes() {
			let prefixedText = `${unprefixed}\n`;
			prefixes.forEach(function(prefix){
				prefixedText += `background-image: ${prefix}${colors};\n`;
			});
			return prefixedText;
		}
	}

	render() {
		const style = {
			background: this.props.style
		};

		const name = this.props.name;
		const faved =this.props.faved;

		return(
			<div className="gradient-card__front gradient-card__side">
				<div 
					className="gradient-card__color" 
					style={style}
					onClick={() => this.copyCSS(style.background, name)} 
					onMouseEnter={this.props.handleHover} 
					onMouseLeave={this.props.handleHover} >
				</div>
				<div className="gradient-card__info">
					<p className="gradient-card__name">{name}</p>
					<div className="gradient-card__options">
						<img 
							src={flipicon} 
							className="flip-button"
							onClick={this.props.flip} 
							alt="Flip card!"
						/>
						<FavedStar 
							addToFavorites={this.props.addToFavorites }
							index={this.props.index}
							status={faved}
						/>
					</div>
				</div>
				<Popup name={name} />
			</div>
		);
	}
}

export default GradientCardFront;