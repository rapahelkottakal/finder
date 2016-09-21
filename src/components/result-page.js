import React from 'react';
import ImageLoader from 'react-imageloader';

import Ga from '../helpers/Ga';

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

	getBgimg(){
		console.log(this.props.imgbr);
		return{
			backgroundImage: 'url(' + this.props.imgbr + ')',
		}
	}

	resultTextStyle(){
		return{
			padding: '5px 20px',
			paddingBottom: 50,
			lineHeight: '1.5',
			marginTop: '-10px',
			color:'#fff',
			fontSize:'14'
		}
	}

	resultTitleStyle(){
	return{
		    padding: '10px 2px 5px 2px',
		    lineHeight: '1.5',
		    color: 'rgb(11, 69, 107)',
		    textAlign: 'center',
		    fontSize: '20px',
		    fontWeight: '800'

	}
}

	shopButtonStyle(){
		return{
			padding: '1px 20px',
		    textDecoration: 'none',
		    color: 'rgb(11, 69, 107)',
		    fontSize: '16px',
		    textAlign: 'center',
		    marginLeft: '30%',
		    borderBottom: '1px solid #0d526f',
		    fontWeight: '800',
		}	
	}

	resetQuizStyle(){
		return{
			left: 0,
			bottom: 0,
			width: '100%',
			textAlign: 'center',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 14,
			cursor: 'pointer'
		
		}
	}


	render() {
// console.log(this);
		return(
				<div>
					<ImageLoader
						src={this.props.image}
						imgProps={{ style: {width: '100%'} }}
						wrapper={React.DOM.div}
						onLoad={this.props.imageLoaded}>
						Image load failed!
					</ImageLoader>
					<div style={this.resultTitleStyle()}>{this.props.title}</div>
					<div style= {this.resultTextStyle()}>
						
						<p>{this.props.text}</p>

						<a onClick={this.handelShopBtnClick} href={this.props.link} style= {this.shopButtonStyle() }  target="_blank">Shop now ></a>
						<div onClick={this.clickHandler.bind(this)} style= {this.resetQuizStyle()}>Play again</div>
					</div>
				</div>
		);
	}
}
