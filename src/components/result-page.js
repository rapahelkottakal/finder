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
			backgroundColor: '#00b59d',
			padding: '5px 20px',
			paddingBottom: 50,
			lineHeight: '1.5',
			marginTop: '-4px',
			color: '#fff',
			fontWeight: 'bold'
		}
	}

	shopButtonStyle(){
		return{
			backgroundColor: '#f05367',
			padding: '1px 20px',
			textDecoration: 'none',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 16
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
			padding: '7px 0',
			fontWeight: 'bold'
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