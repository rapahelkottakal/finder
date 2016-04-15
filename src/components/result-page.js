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

		console.log(this.props);

		return(
			<div>
				<ImageLoader
					src="http://assets.myntassets.com/v1458138437/Lookgood/levis-answer-men-red-loop.jpg"
					imgProps={{ style: {width: '100%'} }}
					wrapper={React.DOM.div}
					onLoad={this.props.imageLoaded}>
					Image load failed!
				</ImageLoader>
				{this.props.text}
				<div>Shop now</div>
				<div onClick={this.clickHandler.bind(this)}>Reset Quiz</div>
			</div>
		);
	}
}