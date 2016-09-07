import React from 'react';
import _ from 'lodash';
import ImageLoader from 'react-imageloader';
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
		    zIndex: 999,
		    top: 0,
		    left: 0,
		    width: '100%',
		    marginBottom:'20px',
		    textAlign: 'center',
		    fontSize: 18,
		    color: '#fff',
		    textTransform: 'uppercase',
		    border: '1px solid #000',
		};
		
		_.assignIn(styles, animate.transition('0.5s'));

		if (this.props.loading) {
			_.assignIn(styles, animate.transform('translateY(-'+ this.state.height +'px)'));
		}

		return styles;
	}

	render() {
		// console.log(this.props.imgsrc);
		return(
			<div className="question-wrapper" style={this.getStyles()} ref="question" >
				<ImageLoader
					src={this.props.imgsrc}
					imgProps={{ style: {width: '100%', borderBottom:'1px solid #000'} }}
				></ImageLoader>
				<div className="question-text" style={{fontSize:'16px', fontWeight:'800', padding:'5% 3%'}}>{this.props.text}</div>

			</div>
			
		);
	}
}