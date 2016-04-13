import React from 'react';

export default class Option extends React.Component {

	getStyles() {
		return {
			position: 'fixed',
		    zIndex: 999,
		    top: 0,
		    left: 0,
		    width: '100%',
		    backgroundColor: 'hsla(0,0%,0%,0.4)',
		    textAlign: 'center',
		    fontSize: 20,
		    color: 'white'
		}
	}

	render() {
		return(
			<div className="question-wrapper" style={this.getStyles()}>
				<div className="question-text" style={{ padding: '10px 15px'}}>{this.props.text}</div>
			</div>
		);
	}
}