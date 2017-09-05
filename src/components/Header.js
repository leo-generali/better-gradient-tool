import React, { Component } from 'react';

class Header extends Component {
	render() {
		const checked = this.props.prefixOn ? "checked" : "";
		
		return (
			<header className="header">
				<div className="header__container">
					<h1 className="bgt-logo">Better Gradient Tool</h1>
					<p className="created-with">Created with <span className="heart">♥</span> by <a href="http://www.leogenerali.com/">Leo Generali</a></p>
				</div>
				<div className="header__container header__container--lower">
					<p className="header-mods">Modifiers:</p><input className="checkbox" type="checkbox" checked={checked} onClick={this.props.updatePrefix}/><p>Prefixes</p>
				</div>
			</header>
		);
	}
}

export default Header;