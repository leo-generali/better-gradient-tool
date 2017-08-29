import React, { Component } from 'react';

class Header extends Component {
	render() {
		const checked = this.props.prefixOn ? "checked" : "";
		
		return (
			<header className="header">
				<div className="header__container">
					<h1 className="bgt-logo">Better Gradient Tool</h1>
					<p className="created-with">Created with <span className="heart">♥</span> by <span className="link-wrapper"><a href="http://www.leogenerali.com/">Leo Generali</a></span></p>
					<input type="checkbox" checked={checked} onClick={this.props.updatePrefix}/><p>Add Prefixes</p>
				</div>
			</header>
		);
	}
}

export default Header;