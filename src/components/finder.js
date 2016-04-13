import React from 'react';

import 'normalize.css/normalize.css';

import Overlay from './overlay';
import Option from './option';
import Question from './question';

export default class Finder extends React.Component {

	constructor() {
		super();

		this.state = {
			questionNo: 0,
			overlay: true
		}
	}

	updateQuestionNo() {
		this.setState({
			questionNo: this.state.questionNo + 1
		});
	}

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
		    backgroundImage: 'url("http://assets.myntassets.com/v1458135561/Lookgood/levis-quiz-background.jpg")',
			backgroundColor: 'rgb(58, 169, 219)',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'top center',
			backgroundSize: 'cover',
			backgroundAttachment: 'fixed'
		}
	}

	getWrapperStyles() {
		return {
			maxWidth: 360,
			margin: '0 auto',
			paddingTop: 50,
			paddingBottom: 1
		}
	}

	createOptions() {

		let optionsArray = this.props.data.qNa[this.state.questionNo].options;

		// console.log(optionsArray.length);

		let options = optionsArray.map((option,i) => {
			return (
				<Option
					clickit = {this.updateQuestionNo.bind(this)}
					key = {i}
					image={option.image}
					text="test1"
				/>
			);
		});

		return options;


	}

	openOverlay() {
		this.setState({ overlay: false });
	}

	render() {

		let question = this.props.data.qNa[this.state.questionNo].question.text;

		return(
			<div style={this.getContainerStyles()}>
				<div style={this.getWrapperStyles()}>
					<Question text={question} />
					
					{ this.createOptions() }
					
				</div>
				<Overlay
					onScreen={this.state.overlay}
					openOverlay={this.openOverlay.bind(this)}
					bgColor={this.props.data.overlay.bgColor}
					bgImage={this.props.data.overlay.img}
				/>
			</div>
		);
	}
}