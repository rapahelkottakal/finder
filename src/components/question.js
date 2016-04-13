import React from 'react';

import animate from '../helpers/animate';

export default class Option extends React.Component {

	constructor() {
		super();
		this.state = {
			height: 100
		}
	}

	componentDidMount() {
		this.setState({
			height: this.refs.question.offsetHeight
		});
	}

	getStyles() {

		let styles = {
			position: 'fixed',
		    zIndex: 999,
		    top: 0,
		    left: 0,
		    width: '100%',
		    backgroundColor: 'hsla(0,0%,0%,0.4)',
		    textAlign: 'center',
		    fontSize: 20,
		    color: 'white'
		};
		
		Object.assign(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			Object.assign(styles, animate.transform('translateY(-'+ this.state.height +'px)'));
		}

		return styles;
	}

	render() {
		return(
			<div className="question-wrapper" style={this.getStyles()} ref="question" >
				<div className="question-text" style={{ padding: '10px 15px'}}>{this.props.text}</div>
			</div>
		);
	}
}