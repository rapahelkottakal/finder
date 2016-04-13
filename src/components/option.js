import React from 'react';
import ImageLoader from 'react-imageloader';

export default class Option extends React.Component {

	render() {
		return(
			<div className="option-text" onClick={this.props.clickit}>
				<ImageLoader
					src={this.props.image}
					imgProps={{ style: {maxWidth: '100%'} }}
					wrapper={React.DOM.div}>	
					Image load failed!
				</ImageLoader>
				<p>{this.props.text}</p>
			</div>
		);
	}
}