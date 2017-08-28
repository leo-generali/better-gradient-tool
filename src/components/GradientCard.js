import React, { Component } from 'react';

import Popup from './Popup';
import FavedStar from './FavedStar';

class GradientCard extends Component {

	state = { 
		isOpen: false,
		flipped: false
	};

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

	flip = () => {
		this.setState({ flipped: !this.state.flipped });
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
			<div ref={name} className="gradient-card" >
					<div 
						className="gradient-card__color" 
						style={style}
						onClick={() => this.togglePopup(style, name)}>
					</div>
					<div className="gradient-card__info">
						<p className="gradient-card__name">{name}</p>
						<div className="gradient-card__options">
							<FavedStar 
								addToFavorites={ this.props.addToFavorites }
								index={this.props.index}
								status={faved}
							/>
							<p 
								className="flip-button"
								onClick={this.flip}>
								↺
							</p>
					</div>
					<Popup name={name} showing={this.state.isOpen} />
				</div>
			</div>
		);
	}
}

export default GradientCard;