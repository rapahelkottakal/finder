import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';

import animate from '../helpers/animate';


export default class Option extends React.Component {

	getStyles() {
		let styles = {
			background:'#fff',
			padding: '15px 30px',
			marginBottom:'5px',
			cursor: 'pointer',

		}

		_.assignIn(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY('+ window.innerHeight +'px)'));
		}

		return styles;
	}

	getBorder(){

		return{

			border:'1px solid #000',
		}
	}

	getTextStyles() {
		return {
			textAlign: 'center',
			fontSize: 16,
			color: 'black',
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
			this.props.clickit(this.props.result, 1);
			window.scrollTo(0, 0);
		}, 750);
		this.props.closeOverlay();
	}


	render() {


		return(
			<div class="wrapper_options">
				<div className="option-text" onClick={this.clickHandler.bind(this)} style={this.getStyles()}>
				
					{this.getText()}
				</div>
			</div>
		);
	}
}