import React from 'react';
import _ from 'lodash';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Overlay from './overlay';
import Option from './option';
import Question from './question';
import ResultPage from './result-page';

import Ga from '../helpers/Ga';

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
			resultOpts,
			gender:null,


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

		Ga({ label: 'User clicked play again' });

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

			let resultPoints = _.values(this.state.resultOpts);

			let maxResultKey = _.findKey( this.state.resultOpts, function(result) {
				return result == _.max(resultPoints)
			});
			// console.log(maxResultKey);
			Ga({ label: 'Result - ' + maxResultKey });
			
			this.setState({
				resultPage: true
			});
			
		}


	}
	getGenderStyles() {
		return {
			minHeight: window.innerHeight,
			backgroundColor:'hsla(0,0%,0%,0.5)',
		    // backgroundImage: 'url("http://assets.myntassets.com/v1461838173/reactive/finder/4-27/background.jpg")',
			position: 'fixed',
			display:(this.state.gender===null) ? 'block' : 'none',
			top: 0,
			left: 0,
			width: '100%',
			zIndex: 9999,
		}
	}

	getContainerStyles() {
		return {
			minHeight: window.innerHeight,
			backgroundColor:'#fff',
		    // backgroundImage: 'url("http://assets.myntassets.com/v1461838173/reactive/finder/4-27/background.jpg")',
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
			paddingTop: '25%',
			paddingBottom: 1
		}
	}

	setGender(g){

		this.setState({
			gender:g
		});
		
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

						menLink={this.props.data.results[maxResultKey].menLink}
						womenLink={this.props.data.results[maxResultKey].womenLink}
						image={this.props.data.results[maxResultKey].image}
						body1={this.props.data.results[maxResultKey].body1}
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
			let css1 =
				{fontSize:12,top:'30%',textAlign:'center',left:0,position:'fixed',backgroundColor:'#efefef',color:'#000',width:'40%',margin:10,padding:10}
			let css2 =
				{fontSize:12,top:'30%',textAlign:'center',right:0,position:'fixed',backgroundColor:'#efefef',color:'#000',width:'40%',margin:10,padding:10}
			
			return(
				<div style={this.getContainerStyles()}>
					<div style={this.getGenderStyles()}>
						<div onClick={this.setGender.bind(this,'men')} style={css1}>Men</div>
						<div onClick={this.setGender.bind(this,'women')} style={css2}>Women</div>
					</div>
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