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
			loading: true,
			loadedImgs: 0
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

	imageLoaded() {
		this.setState({
			loadedImgs: this.state.loadedImgs + 1
		});

		if (this.props.data.qNa[this.state.questionNo].options.length == this.state.loadedImgs ) {

			this.setState({
				loading: false
			});

			setTimeout(() => {
				this.setState({
					loadedImgs: 0
				});
			}, 750);

		}
	}

	createOptions() {

		let optionsArray = this.props.data.qNa[this.state.questionNo].options;

		let options = optionsArray.map((option,i) => {
			return (
				<Option					
					imageLoaded={this.imageLoaded.bind(this)}
					clickit = {this.updateQuestionNo.bind(this)}
					
					loading={this.state.loading}

					openOverlay={this.openOverlay.bind(this)}
					closeOverlay={this.closeOverlay.bind(this)}

					key = {i}
					image={option.image}
					text="test1"
				/>
			);
		});

		return options;


	}

	openOverlay() {
		this.setState({ loading: false });

	}

	closeOverlay() {
		this.setState({ loading: true });
		
	}

	render() {

		// window.scrollTo(0, 0);

		let question = this.props.data.qNa[this.state.questionNo].question.text;

		return(
			<div style={this.getContainerStyles()}>
				<div style={this.getWrapperStyles()}>
					<Question text={question} loading={this.state.loading} />
					
					{ this.createOptions() }
					
				</div>

				<Overlay
					totalImgs={this.props.data.qNa[this.state.questionNo].options.length}
					loading={this.state.loading}
					bgColor={this.props.data.overlay.bgColor}
					bgImage={this.props.data.overlay.img}
					loadedImgs={this.state.loadedImgs}
				/>
			</div>
		);
	}
}