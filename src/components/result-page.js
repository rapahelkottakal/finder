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
			// backgroundColor: '#F2F1F6',
			padding: '5px 10px',
			paddingBottom: 50,
			lineHeight: '1.5',
			marginTop: '-4px',
			margin:'0 auto',
			textAlign:'center'
		}
	}

	shopButtonStyle(){
		return{
			backgroundColor: 'black',
			padding: '4px 5px',
			textDecoration: 'none',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 10.5,
			marginRight:10
		}	
	}

	shopButtonStyle1(){
		return{
			backgroundColor: 'black',
			padding: '4px 10px',
			textDecoration: 'none',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 10.5,
			// marginRight:10

		}	
	}

	resetQuizStyle(){
		// console.log(this.props.link, this.props.collectionLink, )
		return{
			// position: 'absolute',
			// left: 0,
			// bottom: '18%',
			width: '100%',
			textAlign: 'center',
			backgroundColor: '#61B3Db',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 16,
			cursor: 'pointer',
			marginTop:21
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
					{/*<p>{this.props.text}</p>*/}

					<a href={this.props.link} style= {this.shopButtonStyle() }  target="_blank">Shop personality</a>
					<a href={this.props.text} style= {this.shopButtonStyle1() }  target="_blank">dressberry Collections</a>
					<div onClick={this.clickHandler.bind(this)} style= {this.resetQuizStyle()}>Play again</div>
				</div>
			</div>
		);
	}
}