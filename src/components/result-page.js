import React from 'react';
import ImageLoader from 'react-imageloader';

import Ga from '../functions/Ga';

export default class ResultPage extends React.Component {

	handelShopBtnClick(e) {
		Ga({ label: e.target.closest('a').href });
	}

	clickHandler() {

		setTimeout(()=>{
			this.props.restart();
			window.scrollTo(0, 0);
		}, 750);

		this.props.closeOverlay();
	}

	resultTextStyle(){
		return{
			backgroundColor: '#FFF',
			padding: '5px 20px',
			paddingBottom: 50,
			lineHeight: '1.4',
			marginTop: '-4px',
			color:'#0E4274',
			fontSize: '14px',
		}
	}

	shopButtonStyle(){
		return{
			backgroundColor: 'rgb(249, 107, 8)',
			padding: '1px 20px',
			textDecoration: 'none',
			color: 'rgb(14, 66, 116)',
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
				<div style= {this.resultTextStyle()}>
					<p>{this.props.text}</p>

					<a onClick={this.handelShopBtnClick} href={this.props.link} style= {this.shopButtonStyle() }  target="_blank">Shop now</a>
					<div onClick={this.clickHandler.bind(this)} style= {this.resetQuizStyle()}>Play again</div>
				</div>
			</div>
		);
	}
}