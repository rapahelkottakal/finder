import React from 'react';
import ImageLoader from 'react-imageloader';
import _ from 'lodash';

import animate from '../helpers/animate';


export default class Option extends React.Component {
	constructor(props){

		super(props);
		this.state={
			clickedOpt:false,
		}
	}

	getStyles() {

		let styles = {
			borderBottom: '1px solid lightgray',
			padding: '15px 30px'
		}

		_.assignIn(styles, animate.transition('3s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY('+ window.innerHeight +'px)'));
		}
		if(this.state.clickedOpt){
			_.assignIn(styles, {backgroundColor:'#efefef'});
		}

		return styles;
	}

	getTextStyles() {
		return {
			textAlign: 'center',
			fontSize: 16,
			color: '#000',
			textTransform: 'uppercase'
		}
	}

	getText() {

		if (this.props.text) {

			return (<div style={this.getTextStyles()}>{this.props.text}</div>);
		}
	}

	clickHandler() {
		this.setState({clickedOpt:true})
		setTimeout(()=>{
			this.props.clickit(this.props.result, this.props.weight);
			this.setState({clickedOpt:false})
			window.scrollTo(0, 0);
		}, 2000);
		console.log(this.state);
		this.props.closeOverlay();
	}


	render() {
		let imgStyle = {
			maxWidth: '100%',
			// marginBottom: 10
		}

		if(!this.props.plain) {
			// _.assignIn(imgStyle, { boxShadow: 'hsl(0, 0%, 10%) 4px 4px 20px 5px' } );
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