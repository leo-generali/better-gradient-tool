import React, { Component } from 'react';

import Popup from './Popup';
import FavedStar from './FavedStar';

class GradientCard extends Component {
	state = { isOpen: false };

	copyCSS(css, name) {
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
		tempTextArea.select();
		document.execCommand("copy");
		document.body.removeChild(tempTextArea);
	}

	togglePopup = (style, name) => {
		if (typeof style !== 'undefined') {
		    // The variable is defined
			this.copyCSS(style, name);
		}
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		if(this.state.isOpen) {
			setTimeout(	this.togglePopup, 1500);
		}

		const style = {
			background: this.props.styleInfo
		};

		const name = this.props.name;
		const faved = this.props.faved;

		return(
			<div ref={name} className="card card__gradient" >
				<div 
					className="card__color" 
					style={style}
					onClick={() => this.togglePopup(style, name)}>
				</div>
				<div className="card__info">
					<p className="card__gradient--name">{name}</p>
					<div className="card__info-options">
						<FavedStar 
							addToFavorites={ this.props.addToFavorites }
							index={this.props.index}
							status={faved}
						/>
						<p className="flip-button">
							↺
						</p>
					</div>
				</div>
				<Popup name={name} showing={this.state.isOpen} />
			</div>
		);
	}
}

export default GradientCard;