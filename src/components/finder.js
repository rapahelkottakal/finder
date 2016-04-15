import React from 'react';

import 'normalize.css/normalize.css';

import Overlay from './overlay';
import Option from './option';
import Question from './question';
import ResultPage from './result-page';

export default class Finder extends React.Component {

	constructor(props) {
		super(props);

		console.log(this);

		this.state = {
			totalQuestions: props.data.qNa.length,
			questionNo: 5,
			loading: true,
			loadedImgs: 0,
			resultPage: false,

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

		} else if( this.state.resultPage && this.state.loadedImgs == 1 ) {
			this.setState({
				loading: false
			});
		}
	}

	restart() {
		this.setState({ resultPage: false, questionNo: 0 });
	}

	openOverlay() {
		this.setState({ loading: false });

	}

	closeOverlay() {
		this.setState({ loading: true });
		
	}

	updateQuestionNo() {

		console.log(this.state.totalQuestions, this.state.questionNo);

		if (this.state.totalQuestions > this.state.questionNo + 1 ) {

			this.setState({
				questionNo: this.state.questionNo + 1
			});
			
		} else {
			this.setState({
				resultPage: true
			});
			console.log(this.state);
			
		}


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
					text={option.text}
				/>
			);
		});

		return options;


	}

	render() {

		// window.scrollTo(0, 0);

		if(this.state.resultPage) {

			return(
				<div style={this.getContainerStyles()}>

					<ResultPage
						imageLoaded={this.imageLoaded.bind(this)}
						
						loading={this.state.loading}

						restart={this.restart.bind(this)}

						openOverlay={this.openOverlay.bind(this)}
						closeOverlay={this.closeOverlay.bind(this)}
						text="some text"
					/>

					<Overlay
						totalImgs={1}
						loading={this.state.loading}
						bgColor={this.props.data.overlay.bgColor}
						bgImage={this.props.data.overlay.img}
						loadedImgs={this.state.loadedImgs}
					/>
				</div>
				);

		} else {

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
}