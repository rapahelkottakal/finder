import React from 'react';

import animate from '../helpers/animate';

export default class Overlay extends React.Component {

	getStyles() {

		let style = {
			backgroundColor: this.props.bgColor,
			backgroundImage: 'url(' + this.props.bgImage + ')',
			top: 0,
			left: 0,
			position: 'fixed',
			zIndex: '99999',
			overflow: 'auto',
			width: '100%',
			height: window.innerHeight,
			backgroundSize: '100px',
			backgroundPosition: '50% 50%',
			backgroundRepeat: 'no-repeat'
		};

		Object.assign(style, animate.transition('0.5s'));

		if (!this.props.loading) {

			Object.assign(style, animate.transition('0.75s'));

			Object.assign(style, animate.transform('translateX(-'+ window.innerWidth +'px)'));

		}

		return style;
	}

	render() {
		return (
			<div className="overlay" style={this.getStyles()}>
				<p style={{textAlign:'right', padding: '10px 30px'}}>{this.props.loadedImgs} /{this.props.totalImgs} Images Loading</p>
			</div>
			)
	}
}