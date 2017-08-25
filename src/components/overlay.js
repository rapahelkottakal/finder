import React from 'react';
import _ from 'lodash';

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
			backgroundRepeat: 'no-repeat',
			zIndex: '999'
		};

		_.assignIn(style, animate.transition('1s'));

		if (!this.props.loading) {

			_.assignIn(style, animate.transition('1s'));

			_.assignIn(style, animate.transform('translateX(-'+ window.innerWidth +'px)'));

		}

		return style;
	}

	render() {
		// {this.props.loadedImgs} /{this.props.totalImgs} 
		return (
			<div className="overlay" style={this.getStyles()}>
				<p style={{textAlign:'right', padding: '10px 30px'}}></p>
			</div>
			)
	}
}