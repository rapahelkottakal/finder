import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';

import animate from '../helpers/animate';


export default class Option extends React.Component {

	getStyles() {
		let styles = {
			borderBottom: '2px solid rgb(249, 107, 8)',
			padding: '5% 0%',
			textAlign: 'center',
			margin: '0% 7%;',
			display:'flex',
			margin: '0% 7%'
			
		}

		// console.log(this.props.lastOption);

		if (this.props.lastOption) {
			_.assignIn(styles, {
				borderBottom: 'none',
			})
		}

		_.assignIn(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY('+ window.innerHeight +'px)'));
		}
		// if(this.options.key[2]){
		// 	_.assignIn(styles, border('none');

		// }
		// if (this.props.Option[this.key(2)]){

		// 	add.class{
		// 		border:none;
		// 	}
		// }
// console.log(this.option);
		return styles;

	}

	getTextStyles() {
		return {
			fontSize: 15,
			color: '#0E4275',
			width:'51%',
			marginTop: '10%',

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
		}

		// if(!this.props.plain) {
		// 	_.assignIn(imgStyle, { borderRadius: '100%', boxShadow: 'hsl(0, 0%, 10%) 4px 4px 20px 5px' } );
		// }


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