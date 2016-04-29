import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';

import animate from '../helpers/animate';


export default class Option extends React.Component {

	getStyles() {
		let styles = {
			borderBottom: '1px solid lightgray',
			padding: '15px 30px'
		}

		_.assignIn(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY('+ window.innerHeight +'px)'));
		}

		return styles;
	}

	getTextStyles() {
		return {
			textAlign: 'center',
			fontSize: 16,
			color: 'white',
			textTransform: 'uppercase'
		}
	}

	getText() {

		if (this.props.text) {

			return (<div style={this.getTextStyles()}>{this.props.text}</div>);
		}
	}

	clickHandler() {
		setTimeout(()=>{
			this.props.clickit(this.props.result, this.props.weight);
			window.scrollTo(0, 0);
		}, 750);
		this.props.closeOverlay();
	}


	render() {
		let imgStyle = {
			maxWidth: '100%',
			marginBottom: 10
		}

		if(!this.props.plain) {
			_.assignIn(imgStyle, { borderRadius: '100%', boxShadow: 'hsl(0, 0%, 10%) 4px 4px 20px 5px' } );
		}


		return(
			<div className="option-text" onClick={this.clickHandler.bind(this)} style={this.getStyles()}>
				<ImageLoader
					src={this.props.image}
					imgProps={{ style: imgStyle }}
					wrapper={React.DOM.div}
					onLoad={this.props.imageLoaded}>
					Image load failed!
				</ImageLoader>
				{this.getText()}
			</div>
		);
	}
}