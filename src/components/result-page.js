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
			backgroundColor: 'white',
			color: 'black',
			padding: '5px 20px',
			paddingBottom: 50,
			lineHeight: '1.5',
			marginTop: '-5px',
			fontFamily:'sans-serif',
			fontSize:15,
			// textAlign: 'center',
		}
	}

	shopButtonStyle(){
		return{
			backgroundColor: '#62444e',
			padding: '2px 7px',
			textDecoration: 'none',
			color: '#FEC2BE',
			textTransform: 'uppercase',
			fontSize: 15,
			fontFamily:'sans-serif'
		}	
	}

	resetQuizStyle(){
		return{
			position: 'absolute',
			left: 0,
			bottom: 0,
			width: '100%',
			textAlign: 'center',
			backgroundColor: '#61B3Db',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 16,
			cursor: 'pointer',
			padding: '10px 0'
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
				<div style= {this.resultTextStyle()}>
					<p>{this.props.text}</p>

					<a href={this.props.link} style= {this.shopButtonStyle() }  target="_blank">Shop now</a>
					<div onClick={this.clickHandler.bind(this)} style= {this.resetQuizStyle()}>Play again</div>
				</div>
			</div>
		);
	}
}