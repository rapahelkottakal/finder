import React from 'react';
import ImageLoader from 'react-imageloader';


export default class ResultPage extends React.Component {

	clickHandler() {

		setTimeout(()=>{
			this.props.restart();
			window.scrollTo(0, 0);
		}, 750);

		this.props.closeOverlay();
	}


	render() {

		return(
			<div>
				<ImageLoader
					src={this.props.image}
					imgProps={{ style: {width: '100%'} }}
					wrapper={React.DOM.div}
					onLoad={this.props.imageLoaded}>
					Image load failed!
				</ImageLoader>
				{this.props.text}
				<a href={this.props.link}>Shop now</a>
				<div onClick={this.clickHandler.bind(this)}>Reset Quiz</div>
			</div>
		);
	}
}