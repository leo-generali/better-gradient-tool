import React, { Component } from 'react';

class Header extends Component {
	render() {
		const prefixOn = this.props.prefixOn ? "checked" : "";
		const fallbackOn = this.props.fallbackOn ? "checked" : "";
		
		return (
			<header className="header">
				<div className="header__container">
					<h1 className="bgt-logo">Better Gradient Tool</h1>
					<p className="created-with">Created with <span className="heart">♥</span> by <a href="http://www.leogenerali.com/">Leo Generali</a></p>
				</div>
				<div className="header__container header__container--lower">
					<p className="header-mods">Modifiers:</p>
					<input className="checkbox" type="checkbox" checked={prefixOn} onClick={this.props.updatePrefix}/>
					<p className="label">Prefixes</p>
					<input className="checkbox" type="checkbox" checked={fallbackOn} onClick={this.props.updateFallback}/>
					<p className="label">Fallback Color</p>
				</div>
			</header>
		);
	}
}

export default Header;