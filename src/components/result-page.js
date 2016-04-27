import React from 'react';
import ImageLoader from 'react-imageloader';


export default class ResultPage extends React.Component {

	clickHandler() {

		setTimeout(()=>{
			this.props.restart();
			window.scrollTo(0, 0);
		}, 750);

		this.props.closeOverlay();
	}

	resultTextStyle(){
		return{
			backgroundColor: '#F2F1F6',
			padding: '4% 12% 20%',
			lineHeight: '1.5',
			marginTop: '-4px'
		}
	}

	shopButtonStyle(){
		return{
			textAlign: 'center',
			backgroundColor: '#7E7DC3',
			padding: '2% 4%',
			margin: '0 auto',
			textDecoration: 'none',
			color: '#fff',
			fontSize: '20px',
			fontFamily: 'serif',
			position: 'absolute',
			bottom: '4%',
			left: '12%',
			borderRadius: '5px',
			fontWeight: '600',
			cursor: 'pointer'
		}	
	}

	resetQuizStyle(){
		return{
			textAlign: 'center',
			backgroundColor: '#7E7DC3',
			padding: '2% 4%',
			margin: '0 auto',
			textDecoration: 'none',
			color: '#fff',
			fontSize: '20px',
			fontFamily: 'serif',
			position: 'absolute',
			bottom: '4%',
			right: '12%',
			borderRadius: '5px',
			fontWeight: '600',
			cursor: 'pointer'
		}
	}


	render() {

		return(
			<div>
				<ImageLoader
					src={this.props.image}
					imgProps={{ style: {width: '100%'} }}
					wrapper={React.DOM.div}
					onLoad={this.props.imageLoaded}>
					Image load failed!
				</ImageLoader>
				<div style= {this.resultTextStyle()}> {this.props.text}</div>
				<a href={this.props.link} style= {this.shopButtonStyle() }  target="_blank">Shop now</a>
				<div onClick={this.clickHandler.bind(this)} style= {this.resetQuizStyle()}>Reset Quiz</div>
			</div>
		);
	}
}