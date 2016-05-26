import React from 'react';
import _ from 'lodash';

import animate from '../helpers/animate';

export default class Question extends React.Component {

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
		    backgroundColor: '#fff',
		    textAlign: 'center',
		    fontSize: 18,
		    color: 'rgb(14, 66, 117)',
		    fontWeight:'800',
		    textTransform: 'uppercase'
		};
		
		_.assignIn(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY(-'+ this.state.height +'px)'));
		}

		return styles;
	}

	render() {
		return(
			<div className="question-wrapper" style={this.getStyles()} ref="question" >
				<div className="question-text" style={{ padding: '20px 15px', paddingBottom: 10}}>{this.props.text}</div>
			</div>
		);
	}
}