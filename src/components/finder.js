import React from 'react';
import _ from 'lodash';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Overlay from './overlay';
import Option from './option';
import Question from './question';
import ResultPage from './result-page';

export default class Finder extends React.Component {

	constructor(props) {
		super(props);
		
		let resultOpts = {}

		_.forEach(this.props.data.results, function(obj,key) {
			resultOpts[key] = 0;
		});

		this.state = {
			totalQuestions: props.data.qNa.length,
			questionNo: 0,
			loading: true,
			loadedImgs: 0,
			resultPage: false,
			resultOpts
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

		let resultOpts = {}
		
		_.forEach(this.props.data.results, function(obj,key) {
			resultOpts[key] = 0;
		});


		this.setState({ resultPage: false, questionNo: 0, resultOpts });

	}

	openOverlay() {
		this.setState({ loading: false });

	}

	closeOverlay() {
		this.setState({ loading: true });
		
	}

	updateQuestionNo(result, weight) {

		let newResult = this.state.resultOpts;

		newResult[result] = newResult[result] + weight;

		this.setState({
			resultOpts: newResult
		});

		if (this.state.totalQuestions > this.state.questionNo + 1 ) {

			this.setState({
				questionNo: this.state.questionNo + 1,
			});
			
		} else {
			this.setState({
				resultPage: true
			});
			
		}


	}

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
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
			paddingTop: 100,
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
					result={option.key}
					image={option.image}
					text={option.text}
					weight={this.props.data.qNa[this.state.questionNo].question.weight}
					plain={this.props.data.qNa[this.state.questionNo].question.plain}
				/>
			);
		});

		return options;


	}

	render() {

		// window.scrollTo(0, 0);

		if(this.state.resultPage) {

			let resultPoints = _.values(this.state.resultOpts);

			let maxResultKey = _.findKey( this.state.resultOpts, function(result) {
				return result == _.max(resultPoints)
			});

			return(
				<div style={this.getContainerStyles()}>

					<ResultPage
						imageLoaded={this.imageLoaded.bind(this)}
						
						loading={this.state.loading}

						restart={this.restart.bind(this)}

						openOverlay={this.openOverlay.bind(this)}
						closeOverlay={this.closeOverlay.bind(this)}

						link={this.props.data.results[maxResultKey].link}
						image={this.props.data.results[maxResultKey].image}
						text={this.props.data.results[maxResultKey].text}
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