import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';

import animate from '../helpers/animate';


export default class Option extends React.Component {

	getStyles() {
		let styles = {
			width: '100%',
			marginBottom: '50px'
		}

		_.assignIn(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY('+ window.innerHeight +'px)'));
		}

		return styles;
	}

	getTextStyles() {
		return {
			fontSize: 16,
			color: 'white',
			textTransform: 'uppercase',
			minHeight: '116px',
			height: 'auto',
			backgroundColor: '#f05367',
			margin: '0 0 50px 192px',
			fontWeight:'bold',
			padding: '9% 5%'

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
			marginBottom: 10
		}
		let tcimgStyle = {
			maxWidth: '50%',
			marginBottom: 10
		}

		if(!this.props.plain) {
			_.assignIn(imgStyle, { maxWidth: '50%',float: 'left' } );
		}else if(!this.props.twoColumn)  {
			_.assignIn(imgStyle, { maxWidth: '100%',borderRadius: '100%', boxShadow: 'hsl(0, 0%, 10%) 4px 4px 20px 5px' }  );
		}else{
			_.assignIn(imgStyle, { maxWidth: '100%', borderRadius: '50%', boxShadow: 'hsl(0, 0%, 10%) 4px 4px 20px 5px' } );

		}


		return(
			<div className="option-text" onClick={this.clickHandler.bind(this)} style={this.getStyles()}>
				<ImageLoader
					src={this.props.image}
					imgProps={{ style: imgStyle }}
					wrapper={React.DOM.div}
					onLoad={this.props.imageLoaded}>					
					<p>{this.props.optText}</p>
					Image load failed!
				</ImageLoader>
				{this.getText()}
			</div>
		);
	}
}