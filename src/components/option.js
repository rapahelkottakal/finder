import React from 'react';
import ImageLoader from 'react-imageloader';

import animate from '../helpers/animate';


export default class Option extends React.Component {

	getStyles() {
		let styles = {

		}

		Object.assign(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			Object.assign(styles, animate.transform('translateY('+ window.innerHeight +'px)'));
		}

		return styles;
	}

	getTextStyles() {
		return {
			textAlign: 'center',
			fontSize: 30,
			color: 'white'
		}
	}

	getText() {

		if (this.props.text) {

			return (<div style={this.getTextStyles()}>{this.props.text}</div>);
		}
	}

	clickHandler() {
		setTimeout(()=>{
			this.props.clickit();
			window.scrollTo(0, 0);
		}, 750);
		this.props.closeOverlay();
	}


	render() {


		return(
			<div className="option-text" onClick={this.clickHandler.bind(this)} style={this.getStyles()}>
				<ImageLoader
					src={this.props.image}
					imgProps={{ style: {maxWidth: '100%'} }}
					wrapper={React.DOM.div}
					onLoad={this.props.imageLoaded}>
					Image load failed!
				</ImageLoader>
				{this.getText()}
			</div>
		);
	}
}